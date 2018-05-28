/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50721
Source Host           : 119.29.179.146:3306
Source Database       : java_web

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-05-28 16:30:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for proj5
-- ----------------------------
DROP TABLE IF EXISTS `proj5`;
CREATE TABLE `proj5` (
  `id` varchar(50) NOT NULL COMMENT 'id  主健学号',
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `sex` varchar(2) NOT NULL COMMENT '性别',
  `college` varchar(255) NOT NULL COMMENT '学院',
  `classs` varchar(255) NOT NULL COMMENT '班级',
  `phone` varchar(255) NOT NULL COMMENT '电话',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
