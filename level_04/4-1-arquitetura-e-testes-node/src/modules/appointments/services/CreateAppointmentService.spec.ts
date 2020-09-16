import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('shoulb be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12121212');
  });

  // it('should be not able to create two appointments on the same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
