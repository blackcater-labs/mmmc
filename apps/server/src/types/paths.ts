export interface Paths {
  cwd: string

  /**
   * Migrations directory.
   */
  migrationsDir: string

  /**
   * Used to store source files.
   */
  contentDir: string

  /**
   * Used to store program data.
   */
  dataDir: string

  /**
   * Used to store application logs.
   */
  logsDir: string

  /**
   * Used to store database files. And database snapshots.
   * Files in this directory should not be deleted.
   */
  dbDir: string

  /**
   * Used to store cache files.
   * Files in this directory can be deleted at any time.
   */
  cacheDir: string

  /**
   * Used to store user files.
   */
  usersDir: string

  /**
   * Used to store item files.
   */
  itemsDir: string
}
