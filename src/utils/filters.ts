import { AssetType } from '../components/ListItem/types';
import { DESCRIPTION_LIMIT } from '../constants';

export function filterCORS(item: AssetType): boolean {
    return item.Cors === 'yes';
}

export function filterByDescription(item: AssetType): boolean {
    return item.Description.length < DESCRIPTION_LIMIT;
}
