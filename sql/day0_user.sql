-- DB initiation
-- ---------------------------------------
-- Version : 3.0
-- Day0 for user

insert into userdata (ID, USERNAME, FULLNAME, EMAIL, PASSWORD, CREATED_BY, CREATED_ON, MODIFIED_BY, MODIFIED_ON, FAILED_LOGIN_ATTEMPTS, LAST_LOGIN_DATE, USER_GROUP_ID, ACTIVATED, AVATAR)  
values (1,'admin','system administrator','chooliye@hotmail.com', 'admin', 'system', null,null,null, 0, null, 1, 1, null);

insert into userdata (ID, USERNAME, FULLNAME, EMAIL, PASSWORD, CREATED_BY, CREATED_ON, MODIFIED_BY, MODIFIED_ON, FAILED_LOGIN_ATTEMPTS, LAST_LOGIN_DATE, USER_GROUP_ID, ACTIVATED, AVATAR)  
values (2,'chooli','line manager','chooli.yip@gmail.com', 'chooli', 'system', null,null,null, 0, null, 2, 1, null);

commit;