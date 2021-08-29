import MockService from './service';

export default class ServiceManager {
  private readonly services: Map<string, MockService>;

  public constructor() {
    this.services = new Map();
  }

  public getService(name: string): MockService {
    let service = this.services.get(name);

    if (service == null) {
      service = new MockService();
      this.services.set(name, service);
    }

    return service;
  }
}
