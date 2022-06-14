<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>pONG - Painel de Controle</title>

    <script>

        /* function delArrIndex(selId) {
        let select = document.getElementById(selId);
        select.remove(select[0]);
        } */

        function mudarForm(){
            
            if(document.getElementById('rd_tipo_publicacao_publicacao').checked){
                document.getElementById('div_form_requisicao').setAttribute('hidden', true);
                document.getElementById('div_form_evento').setAttribute('hidden', true);
            }

            if(document.getElementById('rd_tipo_publicacao_evento').checked){
                document.getElementById('div_form_evento').removeAttribute('hidden');
            }else{
                document.getElementById('div_form_evento').setAttribute('hidden', true);
            }

            if(document.getElementById('rd_tipo_publicacao_requisicao').checked){
                document.getElementById('div_form_requisicao').removeAttribute('hidden');
            }else{
                document.getElementById('div_form_requisicao').setAttribute('hidden', true);
            }
            
        }

    </script>
    <style>
        #sct_tipo_publicacao span{
            margin-inline: 10px;
        }
    </style>
</head>

<body onload="mudarForm()">
    
    <header>
        <br><br>
        <p><a href="../../index.php"> pONG </a>- Adicionar Publicação...</p>
        <br><br>
    </header>
    <form method="post" action="../php_stuff/add_publicacao.php">

        
        Titulo<br><input type="text" id="txt_titulo" name='txt_titulo'><br>
        Descrição<br><input type="text" id="txt_descricao" name='txt_descricao'><br><br>

        <section id="sct_tipo_publicacao">
            <span>
                <label for="rd_tipo_publicacao_publicacao">Publicação</label>
                <input type="radio" name="rd_tipo_publicacao" id="rd_tipo_publicacao_publicacao" value="publicacao" onclick="mudarForm()" checked>
            </span>
            <span>
                <label for="rd_tipo_publicacao_evento">Evento</label>
                <input type="radio" name="rd_tipo_publicacao" id="rd_tipo_publicacao_evento" value="evento" onclick="mudarForm()">
            </span>
            <span>
                <label for="rd_tipo_publicacao_requisicao">requisição</label>
                <input type="radio" name="rd_tipo_publicacao" id="rd_tipo_publicacao_requisicao" value="requisicao" onclick="mudarForm()">
            </span>
        </section>
        
        <div id="div_form_evento" hidden>
            <!-- <form action="" method="post"> -->
                <div>
                    <label for="sel_tipo_evento">Tipo de Evento</label><br>
                    <select name="sel_tipo_evento" id="sel_tipo_evento">
                        <option value="arrecadacao">Arrecadação</option>
                        <option value="divulgacao">Divulgação</option>
                        <option value="palestras">Palestras</option>
                        <option value="reunioes">Reuniões</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
                <div>
                    <label for="txt_endereco_evento">Endereço</label><br>
                    <input type="text" name="txt_endereco_evento" id="txt_endereco_evento" value="Rua, Número, Bairro, Referência" onmousedown="this.setAttribute('value', '')">
                </div>
                <div>
                    <label for="txt_cidade_evento">Cidade</label><br>
                    <input type="text" name="txt_cidade_evento" id="txt_cidade_evento" value="Cidade" onmousedown="this.setAttribute('value', '')">
                </div>
                <div>
                    <label for="sel_estado_evento">Estado</label><br>
                    <select name="sel_estado_evento" id="sel_estado_evento" 
                    onmousedown="/* delArrIndex('sel_estado_evento') */">
                        <option value="null" selected>Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>
                <div>
                    <label for="date_inicio_evento">Data e Hora do Início</label><br>
                    <input type="date" name="date_inicio_evento" id="date_inicio_evento">
                    <input type="time" name="time_inicio_evento" id="time_inicio_evento">
                </div>
                <div>
                    <label for="date_fim_evento">Data e Hora do Fim</label><br>
                    <input type="date" name="date_fim_evento" id="date_fim_evento">
                    <input type="time" name="time_fim_evento" id="time_fim_evento">
                </div>
                <div>
                    <label for="blob_evento">Fotos (É necessário ao menos uma foto)</label><br>
                    <input type="file" name="blob_evento" id="blob_evento">
                </div>
            <!-- </form> -->
        </div>

        <div id="div_form_requisicao" hidden>
            <!-- <form action="" method="post"> -->
                Foto: <input type="file" name="file_foto" id="file_foto"><br>
                Qtd. de requisições: <input type="text" id="txt_qtd_requisicoes"><br>
                Cargo Procurado:
                <select name="sel_cargo_procurado" id="sel_cargo_procurado">
                    <option value="secretário">secretário</option>
                    <option value="Cozinheiro">Cozinheiro</option>
                    <option value="Faxineiro">Faxineiro</option>
                    <option value="Fisioterapeuta">Fisioterapeuta</option>
                    <option value="Psicólogo">Psicólogo</option>
                </select>
            <!-- </form> -->
        </div>
        <div>
            <input type="submit" name="bt_submit_publicacao" id="bt_submit_publicacao" value="Enviar">
            <input type="reset" name="bt_submit_publicacao" id="bt_reset_publicacao" value="Resetar" onclick="">
        </div>
        

    </form>
</body>
</html>