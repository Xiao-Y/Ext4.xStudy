/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50045
Source Host           : 127.0.0.1:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2015-08-08 13:29:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` varchar(50) NOT NULL,
  `menuName` varchar(100) default NULL,
  `menuUrl` varchar(100) default NULL,
  `parentId` varchar(50) default NULL,
  `remark` varchar(255) default NULL,
  `createTime` timestamp NULL default NULL,
  `updateTime` timestamp NULL default NULL,
  `menuType` varchar(10) default NULL,
  `seq` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('00c540fc-b224-40d5-9e49-e010d678c72f', 'javaScript基础', '', '-1', 'javaScript基础和Extjs窗口', '2015-07-31 00:00:00', '2015-08-08 09:45:59', '0', '2');
INSERT INTO `menu` VALUES ('030306d7-2b7a-4072-b114-d98ebce0cca9', '003_window01.html', '001window/003_window01.html', 'd0e8ad23-53d4-400c-90e7-b62db9e3472e', '003_window01.html', '2015-08-08 11:10:23', '2015-08-08 12:14:58', '1', '1');
INSERT INTO `menu` VALUES ('0430add2-e305-4103-945c-854fd9ff5824', 'home/app/view/ContextMenu.js', 'home/app/view/ContextMenu.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/view/ContextMenu.js', '2015-08-08 13:19:06', '2015-08-08 13:19:06', '1', '7');
INSERT INTO `menu` VALUES ('09ea420c-0dc9-4568-b392-0798f264bf7a', '014form06_fieldSet.js', '014Form/014form06_fieldSet.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form06_fieldSet.js', '2015-08-08 12:57:33', '2015-08-08 12:57:33', '1', '12');
INSERT INTO `menu` VALUES ('0c8c9614-aeeb-45f2-bfa7-ba9b5e93a713', '011_Grid01.html', '011Grid/011_Grid01.html', '1c7c09da-0970-4cf2-aa1d-b807a0993757', '011_Grid01.html', '2015-08-08 12:33:54', '2015-08-08 12:33:54', '1', '1');
INSERT INTO `menu` VALUES ('0fcf4500-14ae-4e2a-851d-35c45d308795', 'home/app/controller/HomeController.js', 'home/app/controller/HomeController.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/controller/HomeController.js', '2015-08-08 13:16:54', '2015-08-08 13:16:54', '1', '3');
INSERT INTO `menu` VALUES ('1214fde9-7812-4833-943c-4c30403cf712', '006_proxy.jsp', '004Proxy/006_proxy.jsp', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_proxy.jsp', '2015-08-08 12:25:21', '2015-08-08 12:28:21', '1', '3');
INSERT INTO `menu` VALUES ('1272f77f-7667-4612-b02d-2a4de9634aac', '006_Memory.js', '004Proxy2/006_Memory.js', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_Memory.js', '2015-08-08 12:30:01', '2015-08-08 12:30:01', '1', '7');
INSERT INTO `menu` VALUES ('12d79ff1-41b2-4beb-8e3d-fad19ce96308', 'Proxy', '', '-1', 'Proxy', '2015-08-08 12:23:57', '2015-08-08 12:23:57', '0', '6');
INSERT INTO `menu` VALUES ('1c7c09da-0970-4cf2-aa1d-b807a0993757', 'Grid', '', '-1', 'Grid', '2015-08-08 12:32:50', '2015-08-08 12:32:50', '0', '7');
INSERT INTO `menu` VALUES ('1cc51d0b-7bdf-4bad-84e2-63d95b71bd5e', '014form06_fieldSet.html', '014Form/014form06_fieldSet.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form06_fieldSet.html', '2015-08-08 12:57:12', '2015-08-08 12:57:12', '1', '11');
INSERT INTO `menu` VALUES ('1d03737c-3549-4d7a-b6b8-640662b50507', '006_Memory.html', '004Proxy2/006_Memory.html', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_Memory.html', '2015-08-08 12:29:34', '2015-08-08 12:29:34', '1', '6');
INSERT INTO `menu` VALUES ('20766cdf-c770-4167-9ace-24bdad3eaf09', '014form02_ayncombobox.js', '014Form/014form02_ayncombobox.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form02_ayncombobox.js', '2015-08-08 12:53:54', '2015-08-08 12:53:54', '1', '4');
INSERT INTO `menu` VALUES ('20824582-b184-42f3-b369-9f16c68b4f82', '001_holleWorld.js', '000base/001_holleWorld.js', '00c540fc-b224-40d5-9e49-e010d678c72f', 'javaScript基础', '2015-08-06 22:31:57', '2015-08-08 10:26:17', '1', '2');
INSERT INTO `menu` VALUES ('22adca5e-7de7-4557-b09b-e2a962f0c59c', '014form04_dateTime.js', '014Form/014form04_dateTime.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form04_dateTime.js', '2015-08-08 12:55:39', '2015-08-08 12:55:39', '1', '8');
INSERT INTO `menu` VALUES ('231890a7-288e-4684-b98f-3b0db5e36fcf', 'Tree', '', '-1', 'Tree', '2015-08-08 12:44:48', '2015-08-08 12:44:48', '0', '9');
INSERT INTO `menu` VALUES ('26069a72-f44d-456b-b2b2-c358a31d5612', 'app/store/UsersStore.js', '012MVC/app/store/UsersStore.js', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', '012MVC/app/store/UserStore.js', '2015-08-08 12:41:46', '2015-08-08 12:43:56', '1', '5');
INSERT INTO `menu` VALUES ('267950ec-4f23-469d-92fb-b29882c57c9e', '006_proxy.html', '004Proxy/006_proxy.html', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_proxy.html', '2015-08-08 12:24:33', '2015-08-08 12:24:33', '1', '1');
INSERT INTO `menu` VALUES ('2741d031-4985-4ad0-aea7-28ad48e8d8b1', '006_one2many.js', '003validations/006_one2many.js', 'd2afa6cc-4255-4dc8-a1f2-c51da104ab8a', '006_one2many.js', '2015-07-31 00:00:00', '2015-08-08 12:22:29', '1', '4');
INSERT INTO `menu` VALUES ('2b2301d7-c075-4b13-9ec6-6f548307694e', 'home/app/store/MenuTreeStore.js', 'home/app/store/MenuTreeStore.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/store/MenuTreeStore.js', '2015-08-08 13:18:10', '2015-08-08 13:18:10', '1', '5');
INSERT INTO `menu` VALUES ('2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', 'Form', '', '-1', 'Form', '2015-08-08 12:51:58', '2015-08-08 12:51:58', '0', '10');
INSERT INTO `menu` VALUES ('2fd87251-4b49-435e-959d-225978e9c43b', '菜单管理', '/menu/index.html', 'ff002416-1d71-4573-a67c-2108d3e0f569', '这个是真的', '2015-07-31 16:24:38', '2015-08-06 20:13:25', '1', '1');
INSERT INTO `menu` VALUES ('3adb8409-af7f-4226-b9fc-a67fc70b9143', '003_window02.html', '001window/003_window02.html', 'd0e8ad23-53d4-400c-90e7-b62db9e3472e', '003_window02.html', '2015-07-31 00:00:00', '2015-08-08 11:13:02', '1', '3');
INSERT INTO `menu` VALUES ('3e3d84cf-fe34-45b0-9d8a-c8abdee05458', '014form03_asynccombobox.js', '014Form/014form03_asynccombobox.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form03_asynccombobox.js', '2015-08-08 12:54:40', '2015-08-08 12:54:40', '1', '6');
INSERT INTO `menu` VALUES ('3fd544bc-80ab-423d-8d28-edf9858c044d', 'home/index.html', 'home/index.html', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/index.html', '2015-08-08 13:14:45', '2015-08-08 13:14:45', '1', '1');
INSERT INTO `menu` VALUES ('4a030123-7b46-4946-8636-92e219af85de', 'app/view/UserList.js', '012MVC/app/view/UserList.js', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', '012MVC/app/view/UserList.js', '2015-08-08 12:42:47', '2015-08-08 12:42:47', '1', '6');
INSERT INTO `menu` VALUES ('4c2ddb3e-bb78-41e5-a1bd-87e0fe546971', '014form05_htmleditor.js', '014Form/014form05_htmleditor.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form05_htmleditor.js', '2015-08-08 12:56:45', '2015-08-08 12:56:45', '1', '10');
INSERT INTO `menu` VALUES ('4c6c0ac8-fc9a-4d1d-954f-e99b81b192a5', 'menu/app/store/MenuTypeStore.js', 'menu/app/store/MenuTypeStore.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/store/MenuTypeStore.js', '2015-08-08 13:07:43', '2015-08-08 13:24:25', '1', '6');
INSERT INTO `menu` VALUES ('4f6ac4e3-ef81-44fe-b837-c6e0a3af2902', 'home/app/view/Viewport.js', 'home/app/view/Viewport.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/view/Viewport.js', '2015-08-08 13:20:04', '2015-08-08 13:20:04', '1', '9');
INSERT INTO `menu` VALUES ('509c6318-e63b-4097-b8f1-cc527676ba30', '014form04_dateTime.html', '014Form/014form04_dateTime.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form04_dateTime.html', '2015-08-08 12:55:09', '2015-08-08 12:55:09', '1', '7');
INSERT INTO `menu` VALUES ('51392821-09ed-42db-8303-6bf2f81a077f', 'home/app/app.js', 'home/app/app.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/app.js', '2015-08-08 13:15:23', '2015-08-08 13:15:23', '1', '2');
INSERT INTO `menu` VALUES ('51a0f337-3e50-4842-be98-ecb6cbf9c0a2', '014form01_base.js', '014Form/014form01_base.js', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form01_base.js', '2015-08-08 12:53:12', '2015-08-08 12:53:12', '1', '2');
INSERT INTO `menu` VALUES ('52718a1c-6787-4fb9-bd0f-5e3ada6d46d8', 'menu/app/app.js', 'menu/app/app.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/app.js', '2015-08-08 13:01:48', '2015-08-08 13:24:02', '1', '2');
INSERT INTO `menu` VALUES ('57128db0-58ab-482d-9dae-8a6c3eff559f', '001_holleWorld.jsp', '000base/001_holleWorld.jsp', '00c540fc-b224-40d5-9e49-e010d678c72f', 'Extjs的HolleWorld', '2015-08-07 23:29:55', '2015-08-08 10:26:06', '1', '1');
INSERT INTO `menu` VALUES ('5aab8f86-feaf-48b5-ad4f-05d47629a353', '006_LocalStorage.html', '004Proxy2/006_LocalStorage.html', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_LocalStorage.html', '2015-08-08 12:26:10', '2015-08-08 12:30:25', '1', '4');
INSERT INTO `menu` VALUES ('5e39e89a-5bd3-4e17-a885-06e84adc9f08', '005_validations.js', '003validations/005_validations.js', 'd2afa6cc-4255-4dc8-a1f2-c51da104ab8a', '005_validations.js', '2015-07-31 14:59:19', '2015-08-08 12:20:22', '1', '2');
INSERT INTO `menu` VALUES ('6900e078-cfc6-4477-9212-64463ca9037b', '主页设计', '', '-1', 'home', '2015-08-08 13:13:53', '2015-08-08 13:13:53', '0', '1');
INSERT INTO `menu` VALUES ('6d2cf322-5c78-4391-b792-b60b005fbaaf', 'menu/app/view/MenuAdd.js', 'menu/app/view/MenuAdd.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/view/MenuAdd.js', '2015-08-08 13:09:37', '2015-08-08 13:24:45', '1', '8');
INSERT INTO `menu` VALUES ('6fb9d68d-f279-49d7-ad29-0d3497e3b071', '014form03_asynccombobox.html', '014Form/014form03_asynccombobox.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form03_asynccombobox.html', '2015-08-08 12:54:19', '2015-08-08 12:54:19', '1', '5');
INSERT INTO `menu` VALUES ('777fe874-e5c4-41ef-8911-181833876892', 'menu/app/store/ParentMenuStore.js', 'menu/app/store/ParentMenuStore.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/store/ParentMenuStore.js', '2015-08-08 13:08:52', '2015-08-08 13:24:38', '1', '7');
INSERT INTO `menu` VALUES ('7913013c-82c0-47ef-b01f-278ff355cca9', '006_proxy.js', '004Proxy/006_proxy.js', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_proxy.js', '2015-08-08 12:24:59', '2015-08-08 12:24:59', '1', '2');
INSERT INTO `menu` VALUES ('7be0eb9d-022f-4ab1-8c88-75562b30c977', '002_javaScript.js', '000base/002_javaScript.js', '00c540fc-b224-40d5-9e49-e010d678c72f', 'javaScript基础', '2015-07-31 00:00:00', '2015-08-08 10:26:56', '1', '4');
INSERT INTO `menu` VALUES ('7be11982-b5fc-4aca-aaba-f2e0cc34e31d', 'Model', '', '-1', 'Model', '2015-08-08 12:15:58', '2015-08-08 12:15:58', '0', '4');
INSERT INTO `menu` VALUES ('825eb116-89f4-49fd-b290-89ec5b631d2f', 'index.html', '012MVC/index.html', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', 'index.html', '2015-08-08 12:37:48', '2015-08-08 12:37:48', '1', '1');
INSERT INTO `menu` VALUES ('841a96a4-be60-41fb-b8c1-ffcf4034a6fd', '014form02_ayncombobox.html', '014Form/014form02_ayncombobox.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form02_ayncombobox.html', '2015-08-08 12:53:32', '2015-08-08 12:53:32', '1', '3');
INSERT INTO `menu` VALUES ('8ac24c98-fdd6-4039-abda-3ea3984701b5', '014form01_base.html', '014Form/014form01_base.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form01_base.html', '2015-08-08 12:52:49', '2015-08-08 12:52:49', '1', '1');
INSERT INTO `menu` VALUES ('8adec26e-113d-4cea-8fb2-33da912b9a67', 'menu/app/view/MenuQuery.js', 'menu/app/view/MenuQuery.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/view/MenuQuery.js', '2015-08-08 13:10:40', '2015-08-08 13:25:00', '1', '10');
INSERT INTO `menu` VALUES ('90fe8490-ecfc-4136-bdef-ed096f554ca2', '002_javaScript4.js', '000base/002_javaScript4.js', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript4.js', '2015-07-31 16:15:27', '2015-08-08 11:04:00', '1', '10');
INSERT INTO `menu` VALUES ('9acb9446-8b35-457d-bb3e-02312fba79cd', 'menu/app/store/MenuStore.js', 'menu/app/store/MenuStore.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'store/app/store/MenuStore.js', '2015-08-08 13:06:38', '2015-08-08 13:24:31', '1', '5');
INSERT INTO `menu` VALUES ('9e55d69f-aedb-4f23-a354-5ef150f98d6b', '011_Grid01.js', '011Grid/011_Grid01.js', '1c7c09da-0970-4cf2-aa1d-b807a0993757', '011_Grid01.js', '2015-08-08 12:34:31', '2015-08-08 12:34:31', '1', '2');
INSERT INTO `menu` VALUES ('a1a8e415-c329-4bcb-a97a-0234d61b1fae', 'home/app/model/MenuTreeModel.js', 'home/app/model/MenuTreeModel.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/model/MenuTreeModel.js', '2015-08-08 13:17:36', '2015-08-08 13:17:36', '1', '4');
INSERT INTO `menu` VALUES ('a7bd23f4-264b-4270-8be9-23ed93759c58', '002_javaScript2.html', '000base/002_javaScript2.html', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript2.html', '2015-08-07 23:23:44', '2015-08-08 11:00:01', '1', '5');
INSERT INTO `menu` VALUES ('a96b4d32-de16-4d7d-87d2-b6750fd456a3', '菜单设计', '', '-1', '菜单列表', '2015-08-08 13:00:12', '2015-08-08 13:26:03', '0', '1');
INSERT INTO `menu` VALUES ('b1d1bb27-de24-44fa-bc11-cdb5dc61dafb', '003_window01.js', '001window/003_window01.js', 'd0e8ad23-53d4-400c-90e7-b62db9e3472e', '003_window01.js', '2015-07-31 15:31:11', '2015-08-08 11:11:45', '1', '2');
INSERT INTO `menu` VALUES ('b4042063-9a9e-4fcb-bba7-9193254cb363', '004_Model01.js', '002Model/004_Model01.js', '7be11982-b5fc-4aca-aaba-f2e0cc34e31d', '004_Model01.js', '2015-07-31 16:14:40', '2015-08-08 13:21:50', '1', '2');
INSERT INTO `menu` VALUES ('b5223d5c-fda4-4998-b2bb-d380f58b0a77', 'menu/app/view/MenuList.js', 'menu/app/view/MenuList.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/view/MenuList.js', '2015-08-08 13:10:13', '2015-08-08 13:24:53', '1', '9');
INSERT INTO `menu` VALUES ('b57c403c-78a7-4fe3-a617-64f8b36f3366', '002_javaScript3.js', '000base/002_javaScript3.js', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript3.js', '2015-08-07 23:26:16', '2015-08-08 11:01:20', '1', '8');
INSERT INTO `menu` VALUES ('bdf8e8f2-0071-47c9-a5fe-ef6c02831981', 'menu/index.html', 'menu/index.html', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/index.html', '2015-08-08 13:00:59', '2015-08-08 13:25:19', '1', '1');
INSERT INTO `menu` VALUES ('c1d3717c-0f82-4f39-a4d0-033e2ea9a6fa', 'menu/app/model/MenuModel.js', 'menu/app/model/MenuModel.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/model/MenuModel.js', '2015-08-08 13:05:24', '2015-08-08 13:24:17', '1', '4');
INSERT INTO `menu` VALUES ('c2ea3400-e173-4a6a-a8c8-38d724c88ab5', 'menu/app/controller/MenuController.js', 'menu/app/controller/MenuController.js', 'a96b4d32-de16-4d7d-87d2-b6750fd456a3', 'menu/app/controller/MenuController.js', '2015-08-08 13:03:35', '2015-08-08 13:24:10', '1', '3');
INSERT INTO `menu` VALUES ('c35dab30-d02c-451d-8244-d9678f8a777a', '011_GridModel01.js', '011Grid/011_GridModel01.js', '1c7c09da-0970-4cf2-aa1d-b807a0993757', '011_GridModel01.js', '2015-08-08 12:34:58', '2015-08-08 12:34:58', '1', '3');
INSERT INTO `menu` VALUES ('cf4c1519-b7cf-4c0b-86dc-1f53e8437251', '002_javaScript3.html', '000base/002_javaScript3.html', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript3.html', '2015-08-07 23:29:24', '2015-08-08 10:54:17', '1', '7');
INSERT INTO `menu` VALUES ('cf50c218-f9c2-4b95-80de-f1601f005988', '006_one2many.html', '003validations/006_one2many.html', 'd2afa6cc-4255-4dc8-a1f2-c51da104ab8a', '006_one2many.html', '2015-07-31 13:15:34', '2015-08-08 12:21:43', '1', '3');
INSERT INTO `menu` VALUES ('cfb4e6ef-a0ee-4d06-9f9a-4f32d25842d6', '005_validations.html', '003validations/005_validations.html', 'd2afa6cc-4255-4dc8-a1f2-c51da104ab8a', '005_validations.html', '2015-08-08 12:19:34', '2015-08-08 12:19:34', '1', '1');
INSERT INTO `menu` VALUES ('d0e8ad23-53d4-400c-90e7-b62db9e3472e', 'Window', '', '-1', 'ExtJS-Window', '2015-08-08 11:09:35', '2015-08-08 11:09:35', '0', '3');
INSERT INTO `menu` VALUES ('d2afa6cc-4255-4dc8-a1f2-c51da104ab8a', 'Validations', '', '-1', 'Validations', '2015-07-31 15:31:55', '2015-08-08 12:18:15', '0', '5');
INSERT INTO `menu` VALUES ('e600bf3a-6621-483b-a3e1-0b796a4838ab', 'home/app/view/MenuTreeView.js', 'home/app/view/MenuTreeView.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/view/MenuTreeView.js', '2015-08-08 13:19:28', '2015-08-08 13:19:28', '1', '8');
INSERT INTO `menu` VALUES ('e67ff3db-b9b7-48e5-938b-05bc3183ae43', '003_window02.js', '001window/003_window02.js', 'd0e8ad23-53d4-400c-90e7-b62db9e3472e', '003_window02.js', '2015-08-08 12:13:29', '2015-08-08 12:13:29', '1', '4');
INSERT INTO `menu` VALUES ('e75f4a8a-7989-4c4b-b91b-84d2f74a6997', '004_Model01.html', '002Model/004_Model01.html', '7be11982-b5fc-4aca-aaba-f2e0cc34e31d', '004_Model01.html', '2015-08-08 12:16:41', '2015-08-08 12:16:41', '1', '1');
INSERT INTO `menu` VALUES ('e869e819-078f-4368-8221-c3f72fbd40f1', '002_javaScript2.js', '000base/002_javaScript2.js', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript2.js', '2015-08-07 23:22:50', '2015-08-08 11:01:54', '1', '6');
INSERT INTO `menu` VALUES ('e8a78004-6013-4097-8de7-bbcde163ce2d', 'app/app.js', '012MVC/app/app.js', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', '012MVC/app/app.js', '2015-08-08 12:36:36', '2015-08-08 12:40:02', '1', '2');
INSERT INTO `menu` VALUES ('ead25cf1-461b-4ad7-8f0a-2190ae650fa5', 'controller/UsersController', '012MVC/app/controller/UsersController.js', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', '012MVC/app/controller/UsersController.js', '2015-08-08 12:39:20', '2015-08-08 12:39:20', '1', '3');
INSERT INTO `menu` VALUES ('ebe52747-b558-45e1-922e-44200318df23', '014form05_htmleditor.html', '014Form/014form05_htmleditor.html', '2d1cf4f3-ada1-43c1-be8b-3f2b018c694f', '014form05_htmleditor.html', '2015-08-08 12:56:10', '2015-08-08 12:56:20', '1', '9');
INSERT INTO `menu` VALUES ('ece8559e-9cde-4784-8283-d61951d835d7', '002_javaScript4.html', '000base/002_javaScript4.html', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript4.html', '2015-08-07 23:21:08', '2015-08-08 12:50:14', '1', '9');
INSERT INTO `menu` VALUES ('f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', 'MVC', '', '-1', 'MVC', '2015-08-08 12:35:46', '2015-08-08 12:35:46', '0', '8');
INSERT INTO `menu` VALUES ('f5837100-4e9f-4eae-9774-07a4c963c8e4', 'app/model/UserModel.js', '012MVC/app/model/UserModel.js', 'f52a8b2e-a570-4a6c-b1b1-dcbc22726c35', '012MVC/app/model/UserModel.js', '2015-08-08 12:40:58', '2015-08-08 12:43:11', '1', '4');
INSERT INTO `menu` VALUES ('fb61e44a-054a-4543-8625-b624dda2392b', 'home/app/view/ContentPanel.js', 'home/app/view/ContentPanel.js', '6900e078-cfc6-4477-9212-64463ca9037b', 'home/app/view/ContentPanel.js', '2015-08-08 13:18:47', '2015-08-08 13:18:47', '1', '6');
INSERT INTO `menu` VALUES ('fbfe7fce-1f28-486a-8359-b5be020d6154', '002_javaScript.html', '000base/002_javaScript.html', '00c540fc-b224-40d5-9e49-e010d678c72f', '002_javaScript.html', '2015-08-07 23:45:01', '2015-08-08 10:30:34', '1', '3');
INSERT INTO `menu` VALUES ('fc725ffe-e2c9-4cc4-803d-a12cc1239dfc', '006_LocalStorage.js', '004Proxy2/006_LocalStorage.js', '12d79ff1-41b2-4beb-8e3d-fad19ce96308', '006_LocalStorage.js', '2015-08-08 12:29:06', '2015-08-08 12:30:09', '1', '5');
INSERT INTO `menu` VALUES ('ff002416-1d71-4573-a67c-2108d3e0f569', '系统管理', '', '-1', '343434', '2015-07-31 00:00:00', '2015-08-08 09:43:55', '0', '0');
