import { TypedEmitter } from 'tiny-typed-emitter'

export class DeleteLinkEvents extends TypedEmitter<{
  currentId: (id: string) => void
}> {}

export default new DeleteLinkEvents()