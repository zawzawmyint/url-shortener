"use client";

import { BaseContainer } from "../generic/GenericStyles";
import { SkeletonUrlItem } from "../generic/SkeletonBox";

export default function LoadingSkeleton() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <BaseContainer>
      <SkeletonUrlItem />
      <SkeletonUrlItem />
      <SkeletonUrlItem />
    </BaseContainer>
  );
}
