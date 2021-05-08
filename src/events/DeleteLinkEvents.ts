import { TypedEmitter } from 'tiny-typed-emitter'

export class DeleteLinkEvents extends TypedEmitter<{
  currentTitle: (title: string) => void
  deletedLink: (title: string) => void
}> {}

export default new DeleteLinkEvents()