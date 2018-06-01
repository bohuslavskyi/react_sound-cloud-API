import SC from 'soundcloud';
import {TRACK_SELECTED} from '../constants/constants'
import {TRACK_LIST_LOADED} from '../constants/constants'


export function getTtrackList(query) {
    return SC.get('/tracks', {
        q: query, limit: 100
    }).then(function (tracks) {
        console.log(tracks);
//////////////////////////////////////////array partitioning 6 items per page///////////////////////////////////////////
        let pager = {};
        pagerInit(pager);

        function pagerInit(p) {
            p.items = tracks;
            p.itemsPerPage = 6;
            p.pagedItems = [];
            p.currentPage = 0;
            function init () {
                for (let i = 0; i < p.items.length; i++) {
                    if (i % p.itemsPerPage === 0) {
                        p.pagedItems[Math.floor(i / p.itemsPerPage)] = [p.items[i]];
                    } else {
                        p.pagedItems[Math.floor(i / p.itemsPerPage)].push(p.items[i]);
                    }
                }
            }
            init();
        }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return {
            type: TRACK_LIST_LOADED,
            payload: pager.pagedItems
        }
    });
};

export function selectTrack(track) {
    return {
        type: TRACK_SELECTED,
        payload: track
    }
};