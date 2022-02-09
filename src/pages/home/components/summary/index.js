import React  from 'react';
import { Fragment } from 'react'
import './index.scss';

import { useTranslation } from 'react-i18next';
/* 
    subject=""
    instruction=""
    left_number="8"
    right_number1="20"
    right_number2="6"
*/
export default function Summary(props) {
    const { subject, instruction, left_number, right_number1, right_number2 } = props
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className='summary-card'>
                <div className='summary-top'>
                    <div className='summary-top-item'>{subject}</div>
                    <div className='summary-top-intro'>{instruction}</div>
                </div>
                <div className='summary-body'>
                    <div className='summary-body-left'>
                        <div className='summary-body-left-item'>
                            <div className='summary-body-left-number'>{left_number}</div>
                            <span>{t('Passed')}</span>
                        </div>
                    </div>
                    <div className='summary-body-right'>
                        <div className='summary-body-right-item'>
                            <div className='summary-body-right-status'>{t('Build')}</div>
                            <div className='summary-body-right-number'>{right_number1}</div>
                        </div>
                        <div className='summary-right-line' />
                        <div className='summary-body-right-item'>
                            <div className='summary-body-right-status'>已下架</div>
                            <div className='summary-body-right-number'>{right_number2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}