/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Message, UbudMessage } from '@ubud/ngrx';

import { Todo } from '../../models/todo';
import { TodoState } from '../../state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@UbudMessage()
export class Todos extends Message<TodoState> {
    public todos!: Todo[];

    public handle(state: TodoState): TodoState {
        return { ...state, todos: this.todos };
    }
}
