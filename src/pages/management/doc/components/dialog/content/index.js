import React, { useEffect, useRef, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import './index.scss'
import CustomButton from '../../../../../../components/style/customButton'
import InputItem from '../../../../../../components/style/input/Item/inputItem';
import DropdownList from '../../../../../../components/style/dropdownList';
import RadioButton from '../../../../../../components/style/radioButton';
import RichText from '../../../../../../components/style/richText';
import { Subtitle } from './content.styled'

export default function Content(props) {

    const [titleWarningMessage, setTitleWarningMessage] = useState('')
    const [linkWarningMessage, setLinkWarningMessage] = useState('')
    const titleValue = useRef('');
    const linkValue = useRef('');
    const titleInfo = {
        content: '',
        holder: '',
    }
    const linkInfo = {
        content: '',
        holder: '://...',
    }
    const docType = ['']
    const docKind = ['', '']

    // 
    useEffect(() => {
        console.log(titleWarningMessage);
    }, [])

    return (
        <DialogContent className="menuContent" dividers>
            <Stack>
                <div className="menuContent-wrapper">
                    <InputItem isRequired={true} message={titleWarningMessage} info={titleInfo} valueRef={titleValue} />
                    <div className="menuContent-wrapper-content">
                        <div className="menuContent-wrapper-content-type">
                            <span></span>
                            <Subtitle>*</Subtitle>
                            <div className="menuContent-wrapper-content-type-dropDown"><DropdownList listItem={docType} itemSelected={props.articleInfo.articleType} /></div>
                        </div>
                        <div className="menuContent-wrapper-content-kind">
                            <span></span>
                            <Subtitle>*</Subtitle>
                            <div className="menuContent-wrapper-content-kind-radioButton">
                                <RadioButton radioLst={docKind}></RadioButton>
                            </div>
                        </div>
                    </div>
                    <div className="menuContent-wrapper-content_down">
                        {/*  */}
                        <span></span>
                        <Subtitle>*</Subtitle>
                        {/* <div className="menuContent-wrapper-richText richText-warning"> */}
                            <RichText />
                        {/* </div> */}
                        {/* <p className="menuContent-wrapper-warning"></p>*/}

                        {/*  */}
                        {/* <InputItem isRequired={true} message={linkWarningMessage} info={linkInfo} valueRef={linkValue} /> */}
                    </div>
                </div>
                <div className="menuContent-buttonFooter">
                    <div className="menuContent-buttonFooter-close"><CustomButton color="closeLarge" onClick={props.handleClose}><CloseIcon /></CustomButton></div>
                    <div className="menuContent-buttonFooter-add"><CustomButton color="addLarge"><CheckIcon /></CustomButton></div>
                </div>
            </Stack>
        </DialogContent>
    )
}