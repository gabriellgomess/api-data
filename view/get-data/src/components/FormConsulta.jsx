import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, Radio, DatePicker, Checkbox } from 'antd';

const FormConsulta = ({ data }) => {
    const dadosCadastrais = data.resposta.dadosCadastrais?data.resposta.dadosCadastrais:[];
    const telefones = data.resposta.telefones?data.resposta.telefones:[];
    const enderecos = data.resposta.enderecos?data.resposta.enderecos:[];
    const emails = data.resposta.emails?data.resposta.emails:[];
    const participacoesEmpresas = data.resposta.participacoesEmpresas?data.resposta.participacoesEmpresas:[];
    const possivelHistoricoProfissional = data.resposta.possivelHistoricoProfissional?data.resposta.possivelHistoricoProfissional:[];

    console.warning("Funciona");
    return (
        <div style={{ width: '90vw', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <Card style={{ width: '90vw', marginTop: '40px', display: 'flex' }}>
                <Form layout='vertical' style={{ display: 'flex', gap: '10px' }}>
                    <div className="1">
                        <h3>Dados Cadastrais</h3>
                        <Form.Item label="CPF" name="cpf">
                            <Input disabled value={dadosCadastrais.cpf || ''} />
                        </Form.Item>
                        <Form.Item label="Nome" name="nome">
                            <Input disabled value={dadosCadastrais.nome || ''} />
                        </Form.Item>
                        <Form.Item label="Sexo">
                            <Radio.Group>
                                <Radio disabled value="masculino"> Masculino </Radio>
                                <Radio disabled value="feminino"> Feminino </Radio>
                                <Radio disabled value="outro"> Outro </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Nascimento">
                            <DatePicker value={dadosCadastrais.dataNascimento} disabled />
                        </Form.Item>
                        <Form.Item
                            label="Idade"
                            name="idade"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Óbito Provável"
                            name="obitoProvavel"
                        >
                            <Checkbox disabled />
                        </Form.Item>
                        <Form.Item
                            label="Signo"
                            name="signo"
                        >
                            <Input disabled value="Capricórnio" />
                        </Form.Item>
                        <Form.Item
                            label="RG"
                            name="rg"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="UF do RG"
                            name="ufRg"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Situação Cadastral"
                            name="situacaoCadastral"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Data da Situação Cadastral"
                            name="dataSituacaoCadastral"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Nome da Mãe"
                            name="maeNome"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="CPF da Mãe"
                            name="maeCpf"
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            label="Data de Nascimento da Mãe"
                            name="maeDataNascimento"
                        >
                            <Input disabled />
                        </Form.Item>
                    </div>
                    <div className="2">
                        {telefones.length > 0 &&
                            <>
                                <h3>Telefones Fixos</h3>
                                {fixos.map((fixo, index) => (
                                    <div key={index} className="telefone-fixo">
                                        <Form.Item label="Número">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Relação">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                        {celulares.length > 0 &&
                            <>
                                <h3>Telefones Móveis</h3>
                                {moveis.map((movel, index) => (
                                    <div key={index} className="telefone-movel">
                                        <Form.Item label="Número">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Relação">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                    <div className="3">
                        {enderecos.length > 0 &&
                            <>
                                <h3>Endereços</h3>
                                {enderecos.map((endereco, index) => (
                                    <div key={index} className="endereco">
                                        <Form.Item label="Tipo Logradouro">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Logradouro">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Número">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Complemento">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Bairro">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Cidade">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="UF">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="CEP">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Latitude">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Longitude">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                    <div className="4">
                        {emails.length > 0 &&
                            <>
                                <h3>E-mails</h3>
                                {emails.map((email, index) => (
                                    <div key={index} className="email">
                                        <Form.Item label="E-mail">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                    <div className="5">
                        {participacoesEmpresas.length > 0 &&
                            <>
                                <h3>Participações em Empresas</h3>
                                {participacoesEmpresas.map((participacaoEmpresa, index) => (
                                    <div key={index} className="participacao-empresa">
                                        <Form.Item label="CNPJ">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Razão Social">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Cargo">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Data de Entrada">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                    <div className="6">
                        {possivelHistoricoProfissional.length > 0 &&
                            <>
                                <h3>Histórico Profissional</h3>
                                {possivelHistoricoProfissional.map((historicoProfissional, index) => (
                                    <div key={index} className="historico-profissional">
                                        <Form.Item label="CNPJ">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Razão Social">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Setor">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Descrição CBO">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Faixa Salarial">
                                            <Input disabled />
                                        </Form.Item>
                                        <Form.Item label="Renda Estimada">
                                            <Input disabled />
                                        </Form.Item>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                </Form>




            </Card>
        </div>
    )
}

export default FormConsulta;