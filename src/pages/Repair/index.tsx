import style from "./repair.module.css";
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import ContentHeader from "@/component/contentHeader";
import type { UploadFile } from 'antd';
import { Button, Select, Form, Input, InputNumber, DatePicker, Upload, Alert } from 'antd';
import { AddIcon } from "@/component/MyIcon"

import jaJP from 'antd/es/date-picker/locale/ja_JP';
interface IntakeValues {
    customer: string;
    facility: string;
    title: string;
    priority: string;
    phone?: string;
    amount?: number;
    visit?: string;
    description?: string;
    images: File[];
}
interface IntakeFields extends Omit<IntakeValues, 'visit' | 'images'> {
    visit?: Dayjs;
    images?: UploadFile[];
}
const imageLimit = 5;
const maxImageBytes = 5 * 1024 * 1024;
const required = [{ required: true, whitespace: true, message: '入力してください。' }];

function Repair() {
    const [form] = Form.useForm<IntakeFields>();
    const [saving, setSaving] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const [submitError, setSubmitError] = useState(false);
    return (
        <>
            <ContentHeader title="修理受付" description="案件の状況と次の対応を確認できます" />
            <Form className={style.form_body} layout="vertical">
                <h3 className={style.form_section_title}>依頼者・施設情報</h3>
                <div className={style.form_grid}>
                    <Form.Item name="customer" label="施設名・法人名" rules={required}><Input /></Form.Item>
                    <Form.Item name="phone" label="電話番号"><Input type="tel" autoComplete="tel" /></Form.Item>
                    <Form.Item className="intake-full" name="facility" label="施設所在地" rules={required}><Input /></Form.Item>
                </div>
                <h3 className={style.form_section_title}>故障・依頼内容</h3>
                <div className={style.form_grid}>
                    <Form.Item className={style.intake_full} name="title" label="設備・案件名" rules={required}><Input /></Form.Item>
                    <Form.Item name="priority" label="優先度">
                        <Select options={['中', '高', '低'].map(value => ({ value, label: value }))} />
                    </Form.Item>
                    <Form.Item name="amount" label="概算金額（円）"
                        rules={[{ type: 'integer', min: 0, message: '0円以上の整数を入力してください。' }]}>
                        <InputNumber min={0} precision={0} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item className={style.intake_full} name="visit" label="希望訪問日時">
                        <DatePicker locale={jaJP} showTime={{ format: 'HH:mm' }} format="YYYY/MM/DD HH:mm"
                            placeholder="希望訪問日時を選択" style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item className={style.intake_full} name="description" label="症状・依頼内容">
                        <Input.TextArea rows={4} />
                    </Form.Item>
                    <Form.Item className={style.intake_full} label="現場写真・添付画像">
                        <Form.Item name="images" valuePropName="fileList" noStyle getValueFromEvent={event => event?.fileList ?? []}>
                            <Upload accept="image/*" listType="picture" multiple maxCount={imageLimit}
                                beforeUpload={(file, batch) => {
                                    if (file === batch[0]) setUploadError('');
                                    if (!file.type.startsWith('image/') || file.size === 0 || file.size > maxImageBytes) {
                                        setUploadError('5MB以下の画像を選択してください。');
                                        return Upload.LIST_IGNORE;
                                    }
                                    const existing = form.getFieldValue('images')?.length ?? 0;
                                    const eligible = batch.filter(item => item.type.startsWith('image/') &&
                                        item.size > 0 && item.size <= maxImageBytes);
                                    if (existing + eligible.indexOf(file) >= imageLimit) {
                                        setUploadError('添付できる画像は最大5枚です。');
                                        return Upload.LIST_IGNORE;
                                    }
                                    return false;
                                }}>
                                <Button icon={<AddIcon />}>画像を選択</Button>
                            </Upload>
                        </Form.Item>
                        <small>最大5枚・1枚5MBまで</small>
                        {uploadError && <Alert type="warning" title={uploadError} showIcon />}
                    </Form.Item>
                </div>
                {submitError && <Alert type="error" title="登録できませんでした。もう一度お試しください。" showIcon />}
                <div className={style.form_actions}>
                    <Button type="primary" htmlType="submit" loading={saving}>修理依頼を登録</Button>
                </div>
            </Form>
        </>
    );
}

export default Repair;