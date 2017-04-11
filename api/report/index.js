/**
 * @author zhaodonghong
 * @fileoverview api report index.js
 * @date 2017/03/03
 */
var getAll = require( './getAll' );
var list = require( './list' );
var detail = require( './getDetail' );

module.exports = [ {
        router: '/report/getAll',
        type: 'post',
        apiToDo: getAll
    },
    {
        router: '/report/list',
        type: 'post',
        apiToDo: list
    },
    {
        router: '/report/getDetail',
        type: 'post',
        apiToDo: detail
    }
];