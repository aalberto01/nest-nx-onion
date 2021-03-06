import { EisenhowerMatrixJsonFileRepository } from '@todo-app/server/eisenhower-matrix/infrastructure';
import { JsonFilePersistenceAdapter } from '@todo-app/server/shared/infrastructure';

export const toDoJsonFileRepositoryFactory = () =>
  new EisenhowerMatrixJsonFileRepository(
    new JsonFilePersistenceAdapter('db/eisenhower-matrix.json')
  );
