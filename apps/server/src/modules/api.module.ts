import { Module } from '@nestjs/common'

import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { SpaceModule } from './space/space.module'
import { LibraryModule } from './library/library.module'
import { PlaylistModule } from './playlist/playlist.module'
import { ItemModule } from './item/item.module'

@Module({
  imports: [
    AuthModule,
    UserModule,
    SpaceModule,
    LibraryModule,
    PlaylistModule,
    ItemModule,
  ],
})
export class ApiModule {}
