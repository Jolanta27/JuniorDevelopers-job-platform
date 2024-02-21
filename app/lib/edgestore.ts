'use client';
 
import { type EdgeStoreRouter } from '../api/edgestore/[...edgestore]/jobPosting';
import { createEdgeStoreProvider } from '@edgestore/react';
 
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
 
export { EdgeStoreProvider, useEdgeStore };