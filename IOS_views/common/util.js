/**
 * Created by wangning on 16/5/8.
 */

import Dimensions from 'Dimensions';
import React from 'react';
import {
    PixelRatio,
    ActivityIndicatorIOS
} from 'react-native';

const Util = {
    navigationHeight: 44,
    navigationBarBGColor:'#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     * @method post
     * @param {string} url
     * @param {function} callback 请求成功回调
     */
    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                successCallback(JSON.parse(responseText));
            })
            .catch(function(err){
                failCallback(err);
            });
    },
    /*loading效果*/
    loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40}}/>
};


export default Util;