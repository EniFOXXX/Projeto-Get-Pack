-- Active: 1675776404733@@127.0.0.1@3306@cursodeprogramacao
CREATE TABLE
    Mensagens (
        id_mensagem SERIAL PRIMARY KEY NOT NULL,
        remetente VARCHAR(255) NOT NULL,
        data_envio TIMESTAMP,
        assunto VARCHAR(255) NOT NULL,
    );

CREATE TABLE
    Cliente (
        id_cliente SERIAL PRIMARY KEY NOT NULL,
        nome_cliente VARCHAR(255) NOT NULL,
        data_parceria TIMESTAMP,
        tipo_cliente VARCHAR(255) NOT NULL,
        cpf_cnpj VARCHAR(255) NOT NULL
    );

CREATE TABLE
    Morador (
        id_morador SERIAL PRIMARY KEY NOT NULL,
        nome_morador VARCHAR(255) NOT NULL,
        sobrenome_morador VARCHAR(255) NOT NULL,
        bloco VARCHAR(255) NOT NULL,
        ap VARCHAR(255) NOT NULL,
        id_cliente INT NOT NULL FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente),
    )
;

CREATE TABLE
    Encomenda (
        id_encomenda SERIAL PRIMARY KEY NOT NULL,
        remetente VARCHAR(255) NOT NULL,
        id_destinatario INT NOT NULL FOREIGN KEY (id_destinatario) REFERENCES morador (id_morador),
    );

CREATE TABLE
    Usuario (
        nome_usuario VARCHAR(255) NOT NULL,
        sobrenome_usuario VARCHAR(255) NOT NULL,
        id_user SERIAL PRIMARY KEY NOT NULL,
        endereco VARCHAR(255),
        cod_encomenda INT,
        id_cliente INT
        FOREIGN KEY (cod_encomenda) REFERENCES Encomenda (cod_encomenda),
        FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente)
    );

CREATE TABLE
    user_permissao (
        id_usuario SERIAL PRIMARY KEY,
        tipo_permissao VARCHAR(255),
        FOREIGN KEY (id_usuario) REFERENCES Usuario (id_user)
    );