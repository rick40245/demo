import React,{ useState, useEffect, Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import './index.scss';
import Content from './content'

export default function DocDiaLog(props) {

    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        className="menu-dialog"
        open={props.dialogInfo.isOpen}
        onClose={props.handleClose}
        disableEnforceFocus
      >
        {props.dialogInfo.dialogType != "" ? (
          props.dialogInfo.dialogType === "add" ? (
            <>
              <DialogTitle className="menu-dialog-title" sx={{ fontSize: "36px", fontWeight: "bold" }}>新增文件</DialogTitle>
              <Content articleInfo={props.articleInfo} dialogType="add" handleClose={props.handleClose} setArticleInfo={props.setArticleInfo}/>
            </>
          ) : (
            <>
              <DialogTitle className="menu-dialog-title" sx={{ fontSize: "36px", fontWeight: "bold" }}>編輯文件</DialogTitle>
              <Content articleInfo={props.articleInfo} dialogType="edit" handleClose={props.handleClose} setArticleInfo={props.setArticleInfo}/>
            </>
          )
        ) : null}
      </Dialog>
    );
}