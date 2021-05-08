import { TypedEmitter } from 'tiny-typed-emitter'

export class UpdateLinkEvents extends TypedEmitter<{
  currentId: (id: string) => void
  currentTitle: (title: string) => void
  currentUrl: (url: string) => void
  currentIcon: (icon: string) => void
}> {}

export default new UpdateLinkEvents()