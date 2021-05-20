import { IBasePlayerInfo } from '../Shared/BasePlayerInfo';
import { IBadge } from './Badge';

export interface IProfilePlayerInfo extends IBasePlayerInfo {
    countryRank: number;
    role: string;
    badges: IBadge[];
    permissions: number;
    inactive: number;
    banned: number;
}
