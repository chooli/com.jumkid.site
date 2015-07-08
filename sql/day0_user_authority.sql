-- DB initiation
-- ---------------------------------------
-- Version : 3.0
-- Day0 for user

insert into user_authority (ID, USER_ID, AUTHORITY, CREATED_BY, CREATED_ON, MODIFIED_BY, MODIFIED_ON)  
values (1,1,'ROLE_ADMIN', 'system', null, 'system', null);

insert into user_authority (ID, USER_ID, AUTHORITY, CREATED_BY, CREATED_ON, MODIFIED_BY, MODIFIED_ON)  
values (2,2,'ROLE_USER', 'system', null, 'system', null);

commit;