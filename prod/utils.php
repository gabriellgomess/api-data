<?php	
	// FUNÇÃO AJUSTA DATA DO FORMULÁRIO PARA O FORMATO DO BANCO DE DADOS
	function dataBR_to_dataDB($dataBr) {

		return implode("-",array_reverse(explode("-", str_replace("/","-",$dataBr))));
	}

	// FUNÇÃO AJUSTA DATA DO BANCO DE DADOS PARA O FORMATO DO FORMULÁRIO
	function dataDB_to_dataBR($dataDb) {

		return implode("/",array_reverse(explode("/", str_replace("-","/",$dataDb))));
	}
	
	// FUNÇÃO AJUSTA VALOR MOEDA DO FORMULÁRIO PARA O FORMATO DO BANCO DE DADOS
	function moedaBR_to_modaDB($moedaBr) {

		return str_replace(",",".",str_replace(".","",$moedaBr));
	}
	function moedaBR_to_moedaDB($moedaBr) {

		return str_replace(",",".",str_replace(".","",$moedaBr));
	}

	// FUNÇÃO AJUSTA VALOR MOEDA DO BANCO DE DADOS PARA O FORMATO DO FORMULÁRIO
	function moedaDB_to_modaBR($moedaDb) {

		return number_format($moedaDb, 2, ',', '.');
	}
	function moedaDB_to_moedaBR($moedaDb) {

		return number_format($moedaDb, 2, ',', '.');
	}
	
	// FUNÇÃO QUE RETORNA A IDADE EM ANOS A PARTIR DA DATA INFORMADA
	function dataBR_to_Idade($dataBr) {

		// Separa em dia, mês e ano
		list($dia, $mes, $ano) = explode('/', $dataBr);

		// Descobre que dia é hoje e retorna a unix timestamp
		$hoje = mktime(0, 0, 0, date('m'), date('d'), date('Y'));

		// Descobre a unix timestamp da data de nascimento do fulano
		$nascimento = mktime( 0, 0, 0, $mes, $dia, $ano);

		// Depois apenas fazemos o cálculo já citado :)
		$idade = floor((((($hoje - $nascimento) / 60) / 60) / 24) / 365.25);

		return $idade;
	}
?>