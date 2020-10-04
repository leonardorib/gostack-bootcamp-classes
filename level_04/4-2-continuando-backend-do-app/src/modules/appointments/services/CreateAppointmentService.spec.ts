import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeNotificationsRepository from '@modules/notifications/repositories/fakes/FakeNotificationsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;
let fakeNotificationRepository: FakeNotificationsRepository;
let fakeCacheProvider: FakeCacheProvider;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeNotificationRepository = new FakeNotificationsRepository();
    fakeCacheProvider = new FakeCacheProvider();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,

      fakeNotificationRepository,
      fakeCacheProvider
    );
  });

  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 11, 20, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      date: new Date(2020, 11, 20, 15),
      user_id: 'fake-user-id',
      provider_id: 'fake-provider-id',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('fake-provider-id');
  });

  it('should not be able to create two appointments on the same time', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 11, 20, 12).getTime();
    });

    const appointmentDate = new Date(2020, 11, 20, 15);

    await createAppointment.execute({
      date: appointmentDate,
      user_id: 'fake-user-id',
      provider_id: 'fake-provider-id',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: 'fake-user-id',
        provider_id: 'fake-provider-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 11, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 11, 20, 11),
        user_id: 'fake-user-id',
        provider_id: 'fake-provider-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment with user_id = provider_id', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 11, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 11, 20, 15),
        user_id: 'fake-user-id',
        provider_id: 'fake-user-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create an appointment before 8AM or after 5PM', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 11, 20, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        date: new Date(2020, 11, 21, 7),
        user_id: 'fake-user-id',
        provider_id: 'fake-provider-id',
      })
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      createAppointment.execute({
        date: new Date(2020, 11, 21, 18),
        user_id: 'fake-user-id',
        provider_id: 'fake-provider-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
