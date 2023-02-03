/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import './index.scss';
import { Translation } from 'react-i18next';
import error from './error.png';
import warn from './warn.png';
import success from './success.png';

const Toast = () => {
  return <ToastContainer hideProgressBar={true} />;
};

const notify = (msg, type = 'success') => {
  switch (type) {
    case 'error':
      toast.error(
        <>
          <Translation ns="common">{(t) => <span>{t('txt_error')}</span>}</Translation>
          {msg && <p className="fw-normal m-0"></p>}
        </>,
        {
          className: 'bg-red-10 fw-bold text-red-100 ps-4',
          icon: () => <img alt="error" src={error} />,
        }
      );
      break;
    case 'warn':
      toast.warn(
        <>
          <Translation ns="common">{(t) => <span>{t('txt_warning')}</span>}</Translation>
          {msg && <p className="fw-normal m-0"></p>}
        </>,
        {
          className: 'bg-yellow-10 fw-bold text-yellow-200 ps-4',
          icon: () => <img alt="warn" src={warn} />,
        }
      );
      break;
    case 'success':
      toast.success(
        <>
          <Translation ns="common">{(t) => <span>{t('txt_successful')}</span>}</Translation>
          {msg && <p className="fw-normal m-0"></p>}
        </>,
        {
          className: 'bg-primary-10 text-green fw-bold ps-4',
          icon: () => <img alt="success" src={success} />,
        }
      );
      break;
    case 'promise':
      toast.promise(
        msg,
        {
          pending: {
            render() {
              return (
                <div className={`position-absolute top-50 start-50 translate-middle`}>
                  <div
                    className="spinner-border"
                    style={{ width: '1rem', height: '1rem' }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span className="p-15 pe-2">Loading</span>
                </div>
              );
            },
            icon: true,
          },
          success: {
            render() {
              return (
                <>
                  <Translation ns="common">{(t) => <span>{t('txt_successful')}</span>}</Translation>
                  {msg && <p className="fw-normal m-0"></p>}
                </>
              );
            },
            className: 'bg-noti-bg-success text-green fw-bold px-2 py-1',
            icon: () => <img alt="success" src={success} />,
          },
          error: {
            render() {
              return (
                <>
                  <Translation ns="common">{(t) => <span>{t('txt_error')}</span>}</Translation>
                  {msg && <p className="fw-normal m-0"></p>}
                </>
              );
            },
            className: 'bg-noti-bg-error fw-bold text-noti-error px-2 py-1',
            icon: () => <img alt="error" src={error} />,
          },
        },
        {
          className: 'bg-dark',
        }
      );
      break;

    default:
      toast.info(msg, {
        className: 'bg-info',
      });
      break;
  }
};

const notifyHTML = (text) => {
  return toast.success(<div className="text-white" dangerouslySetInnerHTML={{ __html: text }} />);
};

export { Toast, notify, notifyHTML };
