import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  button {
    border-radius: 6px;
    background-color: transparent;
    color: ${(props) => props.theme['gray-300']};
    border: 0;
    line-height: 0;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['red-300']};
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(AlertDialog.Content)`
  display: flex;
  gap: 8px;
  flex-direction: column;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface ButtonDialogProps {
  variant: 'cancel' | 'confirm'
}

export const ButtonDialog = styled.button<ButtonDialogProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  border-radius: 6px;
  padding: 10px 16px;
  color: ${(props) =>
    props.variant === 'cancel' ? props.theme['green-300'] : props.theme.white};

  border: ${(props) =>
    props.variant === 'cancel'
      ? `1px solid ${props.theme['green-300']}`
      : `1px solid ${props.theme.white}`};

  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.white};
  }

  svg {
    line-height: 0;
    margin-left: -5px;
  }

  background-color: ${(props) =>
    props.variant === 'cancel' ? 'transparent' : props.theme['red-300']};

  &:hover {
    color: ${(props) =>
      props.variant === 'cancel' ? props.theme.white : props.theme.white};

    background-color: ${(props) =>
      props.variant === 'cancel'
        ? props.theme['green-700']
        : props.theme['red-700']};

    svg {
      color: ${(props) => props.theme.white};
    }

    border: 1px solid
      ${(props) =>
        props.variant === 'cancel'
          ? props.theme['green-700']
          : props.theme['red-700']};
  }
`
export const AlignButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
`
