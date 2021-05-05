import { TypedEmitter } from 'tiny-typed-emitter'

export class DeleteLinkEvents extends TypedEmitter<{
  currentTitle: (title: string) => void
}> {}

export default new DeleteLinkEvents()