import SC from 'soundcloud';
import _ from "lodash"
import {TRACK_SELECTED, } from '../constants/constants'
import {TRACK_LIST_LOADED} from '../constants/constants'
import {SAVE_NEW_SEARHC} from '../constants/constants'


function deleteArrItem(param, arr) {
    let arrVal = arr.indexOf(param);
    if (arrVal !== -1) arr.splice(arrVal, 1);
}

export function getTtrackList(query) {
    return SC.get('/tracks', {
        q: query, limit: 100
    }).then(function (tracks) {
        console.log(tracks);
        //////////////////////////////////array partitioning 6 items per page///////////////////////////////////////////
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
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


export function lastFiveSearches(search) {
    let LS = localStorage.getItem("searches");
    let arrLS;
    if(!LS && LS != ""){
        localStorage.setItem("searches", search);
        LS = localStorage.getItem("searches");
    }else {
        arrLS = LS.split(",");

        arrLS.forEach(function (el, i) {
            if(el == search){
                arrLS.splice(i, 1);
            }else if(arrLS.length >= 5 && i == arrLS.length - 1 && search != ""){
                arrLS.splice(0, 1);
            }
        })

        deleteArrItem("", arrLS);

        arrLS.push(search);
        localStorage.setItem("searches", arrLS);
    }

    return {
        type: SAVE_NEW_SEARHC,
        payload: arrLS
    }
};




export function closeLastSearch(search) {
    let LS = localStorage.getItem("searches");
    let arrLS;
    if(LS){
        arrLS = LS.split(",");
        deleteArrItem(search, arrLS);
        deleteArrItem("", arrLS);
    }



    localStorage.setItem("searches", arrLS);


    return {
        type: SAVE_NEW_SEARHC,
        payload: arrLS
    }
}