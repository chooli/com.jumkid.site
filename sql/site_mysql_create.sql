-- MySQL DB creation
-- ---------------------------------------
-- Version : 3

-- ----------------------------
--  Table structure for event
-- ----------------------------
DROP TABLE IF EXISTS event;
CREATE TABLE event(
id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
created_by varchar(100) ,
created_on timestamp ,
modified_by VARCHAR(100) ,
modified_on TIMESTAMP ,
type varchar(20) NOT NULL ,
module varchar(20) NOT NULL ,
message varchar(255) ,
target_ref_id varchar(20) ,
alarm timestamp ,
fired BOOLEAN ,
CONSTRAINT PRIMARY KEY (id)
)ENGINE=InnoDB;

-- ----------------------------
--  Table structure for datalog
-- ----------------------------
DROP TABLE IF EXISTS datalog;
CREATE TABLE datalog(
id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
object_id varchar(100) NOT NULL ,
created_by varchar(100) ,
created_on timestamp ,
modified_by VARCHAR(100) ,
modified_on TIMESTAMP ,
action varchar(20) ,
module varchar(20) ,
parent_module varchar(20) ,
object longtext ,
key_field_changes text ,
activity_task integer ,
CONSTRAINT PRIMARY KEY (id)
)ENGINE=InnoDB;

-- ----------------------------
--  Table structure for userdata
-- ----------------------------
DROP TABLE IF EXISTS userdata;
CREATE TABLE userdata(
id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
username VARCHAR(255) NOT NULL ,
fullname VARCHAR(255) ,
email VARCHAR(255) NOT NULL ,
password VARCHAR(255) ,
created_by VARCHAR(100) ,
created_on TIMESTAMP ,
modified_by VARCHAR(100) ,
modified_on TIMESTAMP ,
failed_login_attempts INTEGER(1) DEFAULT 0,
last_login_date TIMESTAMP ,
user_group_id INTEGER ,
activated BOOLEAN ,
avatar VARCHAR(100) ,
PRIMARY KEY (id),
UNIQUE KEY (username)
)ENGINE=InnoDB;

-- ----------------------------
--  Table structure for usergroup
-- ----------------------------
DROP TABLE IF EXISTS usergroup;
CREATE TABLE usergroup(
id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
groupname VARCHAR(255) NOT NULL ,
description VARCHAR(1024) ,
parent_group_id INTEGER ,
created_by VARCHAR(100) ,
created_on TIMESTAMP ,
modified_by VARCHAR(100) ,
modified_on TIMESTAMP ,
activated BOOLEAN ,

PRIMARY KEY (id),
UNIQUE KEY (groupname)
)ENGINE=InnoDB;


DROP TABLE IF EXISTS user_authority;
CREATE TABLE user_authority (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
    user_id BIGINT UNSIGNED NOT NULL,
    authority VARCHAR(50) NOT NULL,
    created_by VARCHAR(100) ,
	created_on TIMESTAMP ,
	modified_by VARCHAR(100) ,
	modified_on TIMESTAMP ,
	
    PRIMARY KEY (id),
    INDEX (user_id, authority),
    FOREIGN KEY (user_id)
      REFERENCES userdata(id)
      ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB;

DROP TABLE IF EXISTS user_relationship;
CREATE TABLE user_relationship (
	id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
    user_id BIGINT UNSIGNED NOT NULL,
    friend_id BIGINT UNSIGNED NOT NULL,
	
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
      REFERENCES userdata(id)
      ON DELETE CASCADE,
    FOREIGN KEY (friend_id)
      REFERENCES userdata(id)
      ON DELETE CASCADE
)ENGINE=INNODB;