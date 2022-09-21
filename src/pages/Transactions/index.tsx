import { CheckCircle, Trash, XCircle } from 'phosphor-react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  AlignButtons,
  ButtonDialog,
  Content,
  Overlay,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <AlertDialog.Root>
                      <AlertDialog.Trigger asChild>
                        <button type="button" title="Delete">
                          <Trash size={20} weight="bold" />
                        </button>
                      </AlertDialog.Trigger>
                      <AlertDialog.Portal>
                        <Overlay />
                        <Content>
                          <AlertDialog.Title>
                            <strong>Você tem certeza?</strong>
                          </AlertDialog.Title>
                          <AlertDialog.Description>
                            Essa ação não pode ser desfeita.
                          </AlertDialog.Description>
                          <AlignButtons>
                            <AlertDialog.Cancel asChild>
                              <ButtonDialog
                                variant="cancel"
                                type="button"
                                title="Cancelar"
                              >
                                <XCircle size={25} weight="regular" /> Cancelar
                              </ButtonDialog>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action asChild>
                              <ButtonDialog
                                variant="confirm"
                                type="button"
                                title="Sim, deletar"
                                onClick={() =>
                                  deleteTransaction(transaction.id)
                                }
                              >
                                <CheckCircle size={25} weight="regular" /> Sim,
                                deletar
                              </ButtonDialog>
                            </AlertDialog.Action>
                          </AlignButtons>
                        </Content>
                      </AlertDialog.Portal>
                    </AlertDialog.Root>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
