import { Request, Response } from 'express';
import { isDate, parseISO } from 'date-fns';
import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    // Converts date in the request to the native JS date object format
    // For some reason, when using celebrate validation middleware, our date is converted from string to
    // the actual Date type. So we are parsing the date only if it's not already a Date type.
    const parsedDate = isDate(date) ? date : parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
