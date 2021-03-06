define(['jquery',
        'underscore',
        'backbone',
        './ExtendView',
        '../Collections/UsersCollection',
        '../Models/UserModel',
        './UserView',
        'text!../Templates/DashboardTemplate.html',
        'text!../Templates/FriendListTemplate.html',
        '../../CommonBundle/Components/Helper'],function($, _, Backbone,ExtendView,UserCollection,UserModel,UserView,DashboardTemplate,FriendListTemplate,Helper){

        var FriendList = ExtendView.extend({
           el:$('.container'),
           title:'Friend List',
           layout: _.template(DashboardTemplate),
           template: _.template(FriendListTemplate),
           events:{},

           initialize:function(options) {
               if(options.user.uid === null) {
                   options.router.navigate('/',{trigger:true});
                   return false;
               }
               this.user = options.user;
               this.invitations = (options.invitations !== undefined) ? true : false;
               this.userList = new UserCollection();
               this.userList.url +=(this.invitations === false) ? '/friends/id/'+this.user.uid : '/checkinvite';
               this.helper = Object.create(Helper);
               this.userModel = new UserModel();
               this.userModel.url =  this.userModel.url + '/getuser/id/'+this.user.uid;
               var $this = this;
               this.userList.fetch({success:function(data){
                   $this.render();
               }});
           },

            render:function(){
                var $this = this;
                var emptyValue = (this.invitations) ? "new invitations":"friends";
                this.userModel.fetch({success:function(){
                    $this.showContent($this.layout({user:$this.userModel.toJSON()}),function(){
                        $.Metro.initDropdowns();
                        if($this.userList.models.length > 0) {
                            $('.inner-content').html($this.template({user:$this.userModel.toJSON()}));
                            _.each($this.userList.models,function(friend){
                                var user = new UserView(friend,$this.invitations);
                            });
                        } else {
                            $('.inner-content').html("<h2>You don't have "+emptyValue+"</h2>");
                        }
                    });
                }});
                return this;
            }
        });

        return FriendList;
});
