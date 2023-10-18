import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Card } from 'antd';
import FormConsulta from './FormConsulta';

const ConsultaCpf = () => {
    const [data, setData] = useState([]);

    const fetchData = (cpf) => {  // Adicione um parâmetro aqui
        axios.get(`http://localhost/consultas/prod/assertiva.php?cpf=${cpf}`)  // Use o parâmetro aqui
            .then(res => {
                setData(res.data.resposta);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const onFinish = (values) => {
        fetchData(values.cpf);  // Passe o CPF diretamente aqui
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(data);

    return (
        <>
            <Card
                style={{
                    width: 500,
                }}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                    layout='vertical'
                >
                    <Form.Item
                        label="CPF"
                        name="cpf"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira o CPF para consulta!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Consultar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            
                <FormConsulta data={data} />
                        
        </>


    )


}

export default ConsultaCpf;