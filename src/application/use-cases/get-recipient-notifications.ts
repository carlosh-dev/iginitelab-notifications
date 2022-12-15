import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface GetNotificationsRequest {
  recipientId: string;
}

interface GetNotificationsResponse {
  notifications: Notification[];
};

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: GetNotificationsRequest
  ): Promise<GetNotificationsResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications
    }
  }

}