import React from 'react';
import Navigation from './IOS_views/common/navigation';
import Book from './IOS_views/book/book_list';
import Music from './IOS_views/music/music';
import Movie from './IOS_views/movie/movie';
import {AppRegistry,StyleSheet,Text,View,TabBarIOS,ScrollView,StatusBarIOS} from 'react-native';

const douApp = React.createClass({
    getInitialState:function () {
        return {
            selectedTab:'图书'
        }
    },
    render(){
        return (
            <TabBarIOS tintColor="white" barTintColor="darkslateblue">
               <TabBarIOS.Item
                   title="图书"
                   selected={this.state.selectedTab === '图书'}
                   icon={require('image!book')}
                   onPress={() => {
                       this.setState({
                            selectedTab:'图书'
                       })
                   }}>
                   <Navigation component={Book}/>
               </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="电影"
                    selected={this.state.selectedTab === '电影'}
                    icon={require('image!movie')}
                    onPress={() => {
                       this.setState({
                            selectedTab:'电影'
                       })
                   }}>
                    <Navigation component={Movie}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="音乐"
                    selected={this.state.selectedTab === '音乐'}
                    icon={require('image!music')}
                    onPress={() => {
                       this.setState({
                            selectedTab:'音乐'
                       })
                   }}>
                    <Navigation component={Music}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});


AppRegistry.registerComponent('douApp', () => douApp);
