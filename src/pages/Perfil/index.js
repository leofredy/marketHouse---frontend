import React from 'react'
import '../css/painel/perfil.css'
import '../css/estilos-gerais.css'
import { MdPerson, MdStore, MdDelete, MdSettingsPower, MdEdit } from 'react-icons/md'
import logoImg from '../../img/logo.svg'
import {Link} from 'react-router-dom'
export default function Perfil() {

    const descricao = localStorage.getItem('descricao')
    const telefone = localStorage.getItem('telefone')
    const horario = localStorage.getItem('horario')
    const nome = localStorage.getItem('nome')
    const cidade = localStorage.getItem('cidade')
    const estado = localStorage.getItem('estado')
    const tipo = localStorage.getItem('tipo')
    const email = localStorage.getItem('telefone')

    return (
        <div>
            <header>
                <section className="market-topo">
                    <div className="row align-justify">
                        <div className="columns small-6 large-3">
                            <img src={logoImg} alt=""/>
                        </div>
                        <div className="columns small-3 flex-container align-middle align-justify">
                            <div className="">
                                <Link to="/empresas">
                                    <MdStore alt="" size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                            <div className="">
                                <Link to ="/delet">
                                    <MdDelete alt="" size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                            <div className="">
                                <MdPerson alt="" size={45} color="#FFF" style={{marginTop: 15}}/>
                            </div>
                            <div className="">
                                <Link to="/">
                                    <MdSettingsPower alt="" size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main className="market">
                <section className="">
                    <div className="row align-center">
                        <div className="columns small-12 text-center">
                            <img src="img/perfil.png" alt=""/>
                        </div>
                        <div className="columns small-12 medium-10">
                            <div className="perfil-formulario">
                                <div className="botao-editar">
                                    <Link to="/editar">
                                        <MdEdit alt="" size={35} color="#4FC3F7" />
                                    </Link>
                                </div>
                                <div className="perfil-formulario-box">

                                    <div className="formulario-box-item">
                                        <label for="">Empresa</label>
                                        <input type="text" placeholder={nome} disabled/>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">E-mail</label>
                                        <input type="email" placeholder={email} disabled/>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Horário de funcionamento</label>
                                        <textarea name="name" rows="4" cols="80" placeholder={horario} disabled></textarea>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Senha</label>
                                        <input type="password" placeholder="******" disabled/>
                                    </div>

                                </div>
                                <div className="perfil-formulario-box">

                                    <div className="formulario-box-item">
                                        <label for="">Cidade</label>
                                        <input type="text" placeholder={cidade} disabled/>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Telefone</label>
                                        <input type="email" placeholder={telefone} disabled/>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Descrição</label>
                                        <textarea name="name" rows="4" cols="80" placeholder={descricao} disabled></textarea>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Nova senha</label>
                                        <input type="password" name="" disabled/>
                                    </div>

                                </div>
                                <div className="perfil-formulario-box">

                                    <div className="formulario-box-item">
                                        <label for="">Estado</label>
                                        <select className=""  disabled>
                                            <option>{estado}</option>
                                            <option>AL</option>
                                            <option>AP</option>
                                            <option>AM</option>
                                            <option>BA</option>
                                            <option>CE</option>
                                            <option>DF</option>
                                            <option>ES</option>
                                            <option>GO</option>
                                            <option>MA</option>
                                            <option>MT</option>
                                            <option>MS</option>
                                            <option>MG</option>
                                            <option>PA</option>
                                            <option>PB</option>
                                            <option>PR</option>
                                            <option>PE</option>
                                            <option>PI</option>
                                            <option>RJ</option>
                                            <option>RN</option>
                                            <option>RS</option>
                                            <option>RO</option>
                                            <option>RR</option>
                                            <option>SC</option>
                                            <option>SP</option>
                                            <option>SE</option>
                                            <option>TO</option>
                                        </select>
                                    </div>
                                    <div className="formulario-box-item  formulario-box-item-tipo">
                                        <label for="">Tipo da empresa</label>
                                        <select className="" name="" disabled>
                                            <option>{tipo}</option>
                                            <option>Açougue</option>
                                            <option>Água</option>
                                            <option>Cosmético</option>
                                            <option>Eletrônicos</option>
                                            <option>Fármacia</option>
                                            <option>Informática</option>
                                            <option>Marmitaria</option>
                                            <option>Padaria</option>
                                            <option>Papelaria</option>
                                            <option>Restaurante</option>
                                            <option>Saúde</option>
                                            <option>Supermercado</option>

                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="perfil-botoes">
                                <div className="perfil-botoes-box">
                                    <button type="button" name="button" className="perfil-botoes-cancelar">Cancelar</button>
                                    <button type="button" name="button" className="perfil-botoes-salvar">Salvar</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer>
                <div className="row">
                    <div className="columns small-12">
                        <div className="market-footer">
                            <p className="market-footer-p">Desenvolvido pela equipe Inova Tecno - com apoio do IFSP -INSTITUTO FEDERAL DE EDUCAÇÃO CIÊNCIA E TECNOLOGIA DE SÃO PAULO
                            </p>
                            <img src="img/ifLogo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )

}