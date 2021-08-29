import { Request, Response, Router } from 'express';
import ServiceManager from './service-manager';

const router = Router();
const services = new ServiceManager();

router.get('/:service', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);
  const page = parseInt(req.query['page'] as string) || 0;

  res.status(200).json({
    items: service.findPage(page),
  });
});

router.get('/:service/all', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);

  res.status(200).json({
    items: service.findAll(),
  });
});

router.get('/:service/:id', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);

  const item = service.findByID(req.params['id']);
  if (item) {
    res.status(200).json({
      item,
    });
  } else {
    res.status(404).json({
      error: 'Not Found',
      message: 'Item with this ID not found.',
    });
  }
});

router.post('/:service', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);
  const item = service.create(req.body);
  res.status(201).json({ item });
});

router.put('/:service/:id', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);

  const item = service.update(req.params['id'], req.body);
  if (item) {
    res.status(202).json({ item });
  } else {
    res.status(404).json({
      error: 'Not Found',
      message: 'Item with this ID not found.',
    });
  }
});

router.delete('/:service/:id', (req: Request, res: Response) => {
  const service = services.getService(req.params['service']);

  const item = service.delete(req.params['id']);
  if (item) {
    res.status(201).json({ item });
  } else {
    res.status(404).json({
      error: 'Not Found',
      message: 'Item with this ID not found.',
    });
  }
});

export default router;
