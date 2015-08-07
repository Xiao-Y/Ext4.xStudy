package com.xiaoy.model;

import java.util.Date;

public class MenuModel {
	private String id;
	private String menuName;
	private String menuUrl;
	private String parentId;
	private String parentName;
	private String remark;
	private Date createTime;
	private Date updateTime;
	private String menuType;
	private int seq;
	
	public MenuModel(String id, String menuName, String menuUrl, String parentId,
			String remark, String menuType, int seq) {
		super();
		this.id = id;
		this.menuName = menuName;
		this.menuUrl = menuUrl;
		this.parentId = parentId;
		this.remark = remark;
		this.menuType = menuType;
		this.seq = seq;
	}
	public MenuModel() {
		super();
	}
	public MenuModel(String id, String menuName, String menuUrl,
			String parentId, String remark, Date createTime, Date updateTime,
			String menuType, int seq) {
		super();
		this.id = id;
		this.menuName = menuName;
		this.menuUrl = menuUrl;
		this.parentId = parentId;
		this.remark = remark;
		this.createTime = createTime;
		this.updateTime = updateTime;
		this.menuType = menuType;
		this.seq = seq;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public String getMenuUrl() {
		return menuUrl;
	}
	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	public String getMenuType() {
		return menuType;
	}
	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getParentName()
	{
		return parentName;
	}
	public void setParentName(String parentName)
	{
		this.parentName = parentName;
	}
}
