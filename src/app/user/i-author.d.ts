import { IAvatarUrls } from './i-avatar-urls';

export interface IAuthor {
  self: string;
  name: string;
  key: string;
  accountId: string;
  emailAddress: string;
  avatarUrls: IAvatarUrls;
  displayName: string;
  active: true;
  timeZone: string;
}
