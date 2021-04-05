import type {LayoutRect, Translate} from './coordinates';
import type {Active, UniqueIdentifier} from './other';

export interface DragStartEvent {
  active: Active;
}

export interface DragMoveEvent {
  active: Active;
  delta: Translate;
  over: {
    id: UniqueIdentifier;
    rect: LayoutRect;
  } | null;
}

export interface DragOverEvent {
  active: Active;
  over: {
    id: UniqueIdentifier;
    rect: LayoutRect;
  } | null;
}

export interface DragEndEvent {
  active: Active;
  delta: Translate;
  over: {
    id: UniqueIdentifier;
  } | null;
}

export interface DragCancelEvent extends DragEndEvent {}
