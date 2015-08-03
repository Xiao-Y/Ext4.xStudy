/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2015-08-03 08:32:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `employee`
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) default NULL,
  `age` int(11) default NULL,
  `sex` varchar(5) default NULL,
  `birthday` date default NULL,
  `salary` double default NULL,
  `it` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
