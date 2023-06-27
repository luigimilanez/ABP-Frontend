export default function Tabela() {

    return (
        <div className="resultBox">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Número de Pessoas</th>
                        <th>Tipo de Quarto</th>
                        <th>Telefone</th>
                        <th>Data da Reserva</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Silva</td>
                        <td>joao@example.com</td>
                        <td>123.456.789-00</td>
                        <td>2</td>
                        <td>Suíte Luxo</td>
                        <td>(11) 98765-4321</td>
                        <td>2023-06-27</td>
                    </tr>
                    <tr>
                        <td>Maria Souza</td>
                        <td>maria@example.com</td>
                        <td>987.654.321-00</td>
                        <td>1</td>
                        <td>Quarto Standard</td>
                        <td>(11) 98765-4321</td>
                        <td>2023-07-10</td>
                    </tr>
                    <tr>
                        <td>Carlos Santos</td>
                        <td>carlos@example.com</td>
                        <td>789.123.456-00</td>
                        <td>3</td>
                        <td>Suíte Executiva</td>
                        <td>(11) 98765-4321</td>
                        <td>2023-08-05</td>
                    </tr>
                    <tr>
                        <td>Ana Oliveira</td>
                        <td>ana@example.com</td>
                        <td>456.789.123-00</td>
                        <td>1</td>
                        <td>Quarto Standard</td>
                        <td>(11) 98765-4321</td>
                        <td>2023-09-02</td>
                    </tr>
                    <tr>
                        <td>Pedro Lima</td>
                        <td>pedro@example.com</td>
                        <td>321.987.654-00</td>
                        <td>2</td>
                        <td>Suíte Luxo</td>
                        <td>(11) 98765-4321</td>
                        <td>2023-09-15</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}