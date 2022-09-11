const utils = require('../utils');
const {poolPromise,sql}=require('../../database');

const getEvents = async () => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('events');
        const eventsList = await pool.request().query(sqlQueries.eventslist);
        return eventsList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(eventId) => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('events');
        const event = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .query(sqlQueries.eventbyId);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const addQueue = async (Queuedata) => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('queue');
        const CreateQueue = await pool.request()
                            .input('Chairs', sql.Int,Queuedata.Chairs )
                            .input('Note', sql.NVarChar(1500), Queuedata.Note)
                            .input('TablePosition', sql.Date, Queuedata.TablePosition)
                            .input('TagId', sql.Int, Queuedata.TagId)
                            .input('SubTagId', sql.Int,Queuedata.SubTagId)
                            
                            .query(sqlQueries.CreateQueue);                            
        return CreateQueue.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateChair = async (ClientId, data) => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('queue');        
        const update = await pool.request()
                        .input('ClientId', sql.Int, ClientId)
                        .input('Chairs', sql.Int, data.Chairs)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateNote = async (ClientId, data) => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('queue');
        const update = await pool.request()
                        .input('ClientId', sql.Int, ClientId)
                        .input('Note', sql.NVarChar(1500), updateEvent.Note)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (eventId) => {
    try {
        const pool = await poolPromise
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteEvent = await pool.request()
                            .input('eventId', sql.Int, eventId)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    addQueue,
    updateChair,
    updateNote,
    deleteEvent
}