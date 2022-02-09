import React from 'react';
import './index.scss';
import { useTranslation } from 'react-i18next';


export default function Footer(props) {
    const { t, i18n } = useTranslation();

    return (
        <footer>
            <button onClick={() => { i18n.changeLanguage('ja'); }}>ja</button>
            <button onClick={() => { i18n.changeLanguage('en'); }}>en</button>
            <button onClick={() => { i18n.changeLanguage('zh-TW'); }}>zh-TW</button>
        </footer>
    );
}
  