/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2015-08-03 08:32:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `menu`
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` varchar(255) NOT NULL,
  `menuName` varchar(255) default NULL,
  `menuUrl` varchar(255) default NULL,
  `parentId` varchar(255) default NULL,
  `remark` varchar(255) default NULL,
  `createTime` timestamp NULL default NULL,
  `updateTime` timestamp NULL default NULL,
  `menuType` varchar(255) default NULL,
  `seq` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('00c540fc-b224-40d5-9e49-e010d678c72f', 'vdvd', 'dvdv', '-1', 'cscsc', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '0', '3');
INSERT INTO `menu` VALUES ('1213', '测试', '/test/test/index.html', '3adb8409-af7f-4226-b9fc-a67fc70b9143', 'jsofeo', '2015-07-22 10:10:02', '2015-07-30 10:10:07', '1', '1');
INSERT INTO `menu` VALUES ('2741d031-4985-4ad0-aea7-28ad48e8d8b1', 'ttht', 'ththth', '3adb8409-af7f-4226-b9fc-a67fc70b9143', '8kkk', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '1', '7');
INSERT INTO `menu` VALUES ('2fd87251-4b49-435e-959d-225978e9c43b', '2323', '232323', 'd445304d-be96-461b-878f-ba8d4ad8a4e1', '2323', '2015-07-31 16:24:38', '2015-07-31 16:24:38', '1', '22');
INSERT INTO `menu` VALUES ('3adb8409-af7f-4226-b9fc-a67fc70b9143', 'sasq', 'qsqs', '-1', 'qsqs', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '0', '3');
INSERT INTO `menu` VALUES ('5e39e89a-5bd3-4e17-a885-06e84adc9f08', 'www', 'wwww', '-1', 'wwwww', '2015-07-31 14:59:19', '2015-07-31 14:59:19', '0', '4');
INSERT INTO `menu` VALUES ('7be0eb9d-022f-4ab1-8c88-75562b30c977', 'wdwd', 'dwdwd/dwd', '-1', '3434', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '0', '3');
INSERT INTO `menu` VALUES ('90fe8490-ecfc-4136-bdef-ed096f554ca2', 'asas', 'asas', 'b1d1bb27-de24-44fa-bc11-cdb5dc61dafb', 'asasa', '2015-07-31 16:15:27', '2015-07-31 16:15:27', '1', '2');
INSERT INTO `menu` VALUES ('9b71d677-d05b-422e-abc3-50f2e91b1440', 'asas', 'asas', 'ff002416-1d71-4573-a67c-2108d3e0f569', '23232', '2015-07-31 16:18:48', '2015-07-31 16:18:48', '1', '23');
INSERT INTO `menu` VALUES ('b1d1bb27-de24-44fa-bc11-cdb5dc61dafb', '角双', 'ssrr/kkk', '-1', '444', '2015-07-31 15:31:11', '2015-07-31 15:31:11', '0', '3');
INSERT INTO `menu` VALUES ('b4042063-9a9e-4fcb-bba7-9193254cb363', 'asas', 'asas', 'b1d1bb27-de24-44fa-bc11-cdb5dc61dafb', 'asasa', '2015-07-31 16:14:40', '2015-07-31 16:14:40', '1', '2');
INSERT INTO `menu` VALUES ('b7f96dc5-c1cc-463b-afc2-d62f81ce934d', 'wqw', 'qwqw', 'd445304d-be96-461b-878f-ba8d4ad8a4e1', 'wqwew', '2015-07-31 16:20:13', '2015-07-31 16:20:13', '1', '22');
INSERT INTO `menu` VALUES ('c0e97ee7-d559-4218-b60d-cb7d167d95ab', 'asas', 'asas', 'd445304d-be96-461b-878f-ba8d4ad8a4e1', '323', '2015-07-31 16:23:25', '2015-07-31 16:23:25', '1', '2');
INSERT INTO `menu` VALUES ('cacc32f4-2121-4dbf-bbdd-5cd123f30da4', 'xsx', 'xsx', '-1', '2323', '2015-07-31 16:17:16', '2015-07-31 16:17:16', '0', '4');
INSERT INTO `menu` VALUES ('cf50c218-f9c2-4b95-80de-f1601f005988', '333', '4444', '2741d031-4985-4ad0-aea7-28ad48e8d8b1', '444', '2015-07-31 13:15:34', '2015-07-31 13:15:34', '1', '4');
INSERT INTO `menu` VALUES ('d2afa6cc-4255-4dc8-a1f2-c51da104ab8a', '777777', '777/7777', '-1', '777777', '2015-07-31 15:31:55', '2015-07-31 15:31:55', '0', '7');
INSERT INTO `menu` VALUES ('d445304d-be96-461b-878f-ba8d4ad8a4e1', 'sadad', 'dadad', '-1', 'dwdw', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '0', '2');
INSERT INTO `menu` VALUES ('fa79d392-3aea-4eed-a061-91523a5ec685', 'rgrg', 'rgrg', '00c540fc-b224-40d5-9e49-e010d678c72f', 'erer', '2015-07-31 13:12:20', '2015-07-31 13:12:20', '1', '2');
INSERT INTO `menu` VALUES ('ff002416-1d71-4573-a67c-2108d3e0f569', '我的菜单', 'my/my/index.html', '-1', '343434', '2015-07-31 00:00:00', '2015-07-31 00:00:00', '0', '3');
