const router=require('express').Router();

const {CountryAll} = require('../country/CountryAll');
const {CountryList} = require('../country/CountryList');

const {History} = require('../notification/History');

const {List,statistics,busy,release,tags}=require('../table/TableList')

const {queue,GetByClient,Hold,history,Statistics,editChairs,editNote,call,callStatus,notify,notifyReset,sendMessage,hold,cancel, seat,add } = require('../queue/Queue');




const {summary,areas,Tags,setting} = require('../restaurants/Restaurants');

const {holdStatus,cancelReasonRequired,maxChairs,branchStatus,BranchOpen,customeMessage,autoMessage,branchFull,inSideFull,outSideFull,inSideActive,outSideActive,enableQueueTags,autoHold,autoCancel,inSideName,outSideName,inSideAutoFull,outSideAutoFull,hideInside,hideOutSide,hideAnyArea,addWorkingHoures,updateWorkingHours}=require('../restaurants/Updates');


const {GetRestaurants} = require('../testing/GetRestaurants');
const { GetById, GetByMobile, create } = require('../client/client');
const { Login, Login_LocalHost } = require('../account/account');



//countries

router.get('/host/country/list',CountryList);
router.get('/host/country/all',CountryAll);

//notifiaction history
router.post('/host/notification/history',History);


//queue get
router.get('/host/queue/queue',queue);
router.get('/host/queue/Hold',Hold);
router.get('/host/queue/history',history);
router.get('/host/queue/Statistic',Statistics);

//queue post
router.post('/host/queue/GetByClient',GetByClient);
router.post('/host/queue/editChairs',editChairs);
router.post('/host/queue/editNote',editNote);
router.post('/host/queue/call',call);
router.post('/host/queue/callStatus',callStatus);
router.post('/host/queue/notify',notify);
router.post('/host/queue/notifyReset',notifyReset);
router.post('/host/queue/sendMessage',sendMessage);
router.post('/host/queue/hold',hold);
router.post('/host/queue/cancel',cancel);
router.post('/host/queue/seat',seat);
router.post('/host/queue/add',add);



//Restarunts get
router.get('/host/restaurant/summary',summary);
router.get('/host/restaurant/areas',areas);
router.get('/host/restaurant/Tags',Tags);
router.get('/host/restaurant/setting',setting);


//Updates restaurant post
router.post('/host/restaurant/update/holdStatus',holdStatus);
router.post('/host/restaurant/update/cancelReasonRequired',cancelReasonRequired);
router.post('/host/restaurant/update/maxChairs',maxChairs);
router.post('/host/restaurant/update/branchStatus',branchStatus);
router.post('/host/restaurant/update/BranchOpen',BranchOpen);
router.post('/host/restaurant/update/customeMessage',customeMessage);
router.post('/host/restaurant/update/autoMessage',autoMessage);
router.post('/host/restaurant/update/branchFull',branchFull);
router.post('/host/restaurant/update/inSideFull',inSideFull);
router.post('/host/restaurant/update/outSideFull',outSideFull);
router.post('/host/restaurant/update/inSideActive',inSideActive);
router.post('/host/restaurant/update/outSideActive',outSideActive);
router.post('/host/restaurant/update/enableQueueTags',enableQueueTags);
router.post('/host/restaurant/update/autoHold',autoHold);
router.post('/host/restaurant/update/autoCancel',autoCancel);
router.post('/host/restaurant/update/inSideName',inSideName);
router.post('/host/restaurant/update/outSideName',outSideName);
router.post('/host/restaurant/update/inSideAutoFull',inSideAutoFull);
router.post('/host/restaurant/update/outSideAutoFull',outSideAutoFull);
router.post('/host/restaurant/update/hideInside',hideInside);
router.post('/host/restaurant/update/hideOutSide',hideOutSide);
router.post('/host/restaurant/update/hideAnyArea',hideAnyArea);
router.post('/host/restaurant/update/addWorkingHoures',addWorkingHoures);
router.post('/host/restaurant/update/updateWorkingHours',updateWorkingHours);

// //table list
router.get('/host/table/List',List);
router.get('/host/table/statistics',statistics);
router.post('/host/table/busy',busy);
router.post('/host/table/release',release);
router.post('/host/table/tags',tags);

// //testing
router.get('/host/Get/GetRestaurants',GetRestaurants);


// //client 
router.post('/host/client/create',create);
router.get('/host/client/GetByMobile',GetByMobile);
router.get('/host/client/GetById',GetById);

//account
router.post('/host/account/Login',Login);
router.post('/host/account/Login_LocalHost',Login_LocalHost);


module.exports=router

