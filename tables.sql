CREATE TABLE Mensagens (
  id_mensagem SERIAL PRIMARY KEY NOT NULL,
  remetente VARCHAR(255) NOT NULL,
  data_envio TIMESTAMP NOT NULL,
  assunto VARCHAR(255) NOT NULL
--texto_mensagem VARCHAR(255) NOT NULL
);

CREATE TABLE Cliente (
  id_cliente SERIAL PRIMARY KEY NOT NULL,
  nome_cliente VARCHAR(255) NOT NULL,
  sobrenome_cliente VARCHAR(255) NOT NULL,
  data_cadastro TIMESTAMP NOT NULL,
  tipo_cliente VARCHAR(255) NOT NULL,
  cpf_cnpj VARCHAR(255) NOT NULL
);

CREATE TABLE Morador (
  id_morador SERIAL PRIMARY KEY NOT NULL,
  nome_morador VARCHAR(255) NOT NULL,
  sobrenome_morador VARCHAR(255) NOT NULL,
  bloco VARCHAR(255) NOT NULL,
  ap VARCHAR(255) NOT NULL,
  id_cliente INT NOT NULL REFERENCES Cliente (id_cliente) ON DELETE SET NULL
);

CREATE TABLE Encomenda (
  id_encomenda SERIAL PRIMARY KEY NOT NULL,
  remetente VARCHAR(255) NOT NULL,
  id_destinatario INT REFERENCES Morador (id_morador)
);

CREATE TABLE User_permissao (
  id_permissao INT PRIMARY KEY,
  tipo_permissao VARCHAR(255)
);

CREATE TABLE Usuario (
  id_user SERIAL PRIMARY KEY NOT NULL,
  nome_usuario VARCHAR(255) NOT NULL,
  sobrenome_usuario VARCHAR(255) NOT NULL,
  endereco VARCHAR(255),
  id_cliente INT NOT NULL REFERENCES Cliente (id_cliente),
  id_user_permissao INT NOT NULL REFERENCES User_permissao (id_permissao)
);


-- INSERT INTO Mensagens
INSERT INTO Mensagens (remetente, data_envio, assunto)
VALUES 
  ('Fulano', now(), 'Olá, gostaria de saber o prazo de entrega para o meu pedido.')
  ('Beltrano',now(), 'Obrigado pelo ótimo atendimento.'),
  ('Ciclano',now(), 'Minha encomenda não chegou ainda.'),
  ('Cleber', now(), 'Seria legal ter um rastreador em tempo real no site.'),
  ('Julia', now(), 'Parabéns pela eficiência na entrega.');

-- INSERT INTO Cliente
INSERT INTO Cliente (nome_cliente, sobrenome_cliente, data_cadastro, tipo_cliente, cpf_cnpj)
VALUES 
  ('Maria', 'Silva', now(), 'PF', '123.456.789-00'),
  ('João', 'Pereira', now(), 'PF', '987.654.321-00'),
  ('Empresa XYZ Ltda.', 'Ltda', now(), 'PJ', '12.345.678/0001-90'),
  ('Fernanda', 'Oliveira', now(), 'PF', '111.222.333-44'),
  ('Pedro', 'Souza', now(), 'PF', '555.444.333-22');

-- INSERT INTO Morador
INSERT INTO Morador (nome_morador, sobrenome_morador, bloco, ap, id_cliente)
VALUES 
  ('Ana', 'Fernandes', 'B1', '101', 1),
  ('Ricardo', 'Marques', 'A3', '302', 2),
  ('Lucas', 'Silveira', 'B2', '201', 4),
  ('Sandra', 'Santos', 'A2', '503', 5),
  ('Paulo', 'Costa', 'B1', '102', 1);

-- INSERT INTO Encomenda
INSERT INTO Encomenda (remetente, id_destinatario)
VALUES 
  ('Loja ABC', 1),
  ('Loja XYZ', 2),
  ('Loja QWE', 3),
  ('Loja ASD', 4),
  ('Loja ZXC', 5);

INSERT INTO User_permissao (id_permissao, tipo_permissao) VALUES
  (1, 'administrador'),
  (2, 'usuário');

-- INSERT INTO Usuario
INSERT INTO Usuario (nome_usuario, sobrenome_usuario, endereco, id_cliente, id_user_permissao )
VALUES 
  ('Gabriel', 'Silva', 'Rua das Flores, 123', 1,1),
  ('Mariana', 'Santos', 'Av. Brasil, 456', 2,2),
  ('Rodrigo', 'Oliveira', 'Rua dos Pinheiros, 789',3,2),
  ('Cassiano', 'Santos', 'Av. dos Estados , 456', 4,2),
  ('Fernando', 'Santos', 'Av. Central, 222', 5,2)
  
  
SELECT * FROM CLIENTE
SELECT * FROM ENCOMENDA
SELECT * FROM MENSAGENS;
SELECT * FROM MORADOR
SELECT * FROM USER_PERMISSAO
SELECT * FROM USUARIO

SELECT * FROM encomenda WHERE id_destinatario IN (1,2,3)

SELECT usuario.nome_usuario, usuario.sobrenome_usuario, user_permissao.tipo_permissao 
FROM Usuario
FULL JOIN User_permissao
ON usuario.id_user_permissao = user_permissao.id_permissao;
