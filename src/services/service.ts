interface Item extends Record<string, any> {
  id: number;
}

export default class MockService {
  private indexOffset;
  private readonly items: Set<Item>;

  public constructor() {
    this.indexOffset = 1;
    this.items = new Set();
  }

  public create(body: any): Item {
    body.id = this.indexOffset;
    this.items.add(body as Item);
    this.indexOffset++;
    return body;
  }

  public delete(id: number | string) {
    const item = this.findByID(id);
    if (item) {
      this.items.delete(item);
      return item;
    } else {
      return null;
    }
  }

  public findAll(): Array<Item> {
    return Array.from(this.items);
  }

  public findPage(page: number): Array<Item> {
    const items = this.findAll();
    const maxItemsPerPage = 10;
    const pageItems: Array<Item> = [];

    for (let i = 0; i < items.length; i++) {
      if (i >= page * maxItemsPerPage) {
        if (items[i] != null) {
          pageItems.push(items[i]);
          if (pageItems.length >= maxItemsPerPage) {
            break;
          }
        }
      }
    }

    return pageItems;
  }

  public findByID(id: number | string) {
    for (let item of this.findAll()) {
      if (item.id == id) {
        return item;
      }
    }
  }

  public update(id: number | string, body: any): Item {
    const item = this.findByID(id);

    if (!item) {
      return null;
    }

    for (let key of Object.keys(body)) {
      item['description'] = body[key];
    }

    return item;
  }
}
