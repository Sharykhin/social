/*jslint regexp: true, nomen: true, sloppy: true */
/*global requirejs, require, define, $, Backbone, console */

define([
    'jquery',
    'underscore',
    'backbone',
    './ExtendView',
    'text!../Templates/HomeTemplate.html',


],
    function ($, _, Backbone,ExtendView, HomeTemplate) {

        'use strict';

        var HomeView = ExtendView.extend({

            title:'Welcome to Social Network. Join us!!!',
            template: _.template(HomeTemplate),
            initialize:function()
            {

                this.render();

            },

            render:function(){
                this.$el.html(this.template());
                $(this.title_selector).text(this.title);
                return this;
            }

        });

        return HomeView;
    });
